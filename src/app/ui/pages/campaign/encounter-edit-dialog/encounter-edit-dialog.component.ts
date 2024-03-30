import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Adventure } from '../../../../data/facts/adventure';
import { Counted, Encounter, VALIDATE } from '../../../../data/facts/encounter';
import { CampaignsService } from '../../../../services/campaigns.service';
import { ItemService } from '../../../../services/item.service';
import { MonsterService } from '../../../../services/monster.service';
import { NpcService } from '../../../../services/npc.service';
import { SpellService } from '../../../../services/spell.service';
import { DialogComponent } from '../../../common/dialog/dialog.component';
import { Link } from '../../../common/link/link';
import { CampaignEditDialogComponent } from '../../campaigns/campaign-edit-dialog/campaign-edit-dialog.component';

export interface EditData {
  adventure: Adventure;
  encounter?: Encounter;
  duplicate?: boolean;
}

@Component({
  selector: 'encounter-edit-dialog',
  templateUrl: './encounter-edit-dialog.component.html',
  styleUrls: ['./encounter-edit-dialog.component.scss'],
  standalone: true,
  imports: [
    DialogComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatCheckboxModule,
  ],
})
export class EncounterEditDialogComponent {
  name: FormControl<string | null>;
  id: FormControl<string | null>;
  locations: FormControl<string | null>;
  npcs: FormControl<string | null>;
  monsters: FormControl<string | null>;
  spells: FormControl<string | null>;
  items: FormControl<string | null>;
  images: FormControl<string | null>;
  sounds: FormControl<string | null>;
  notes: FormControl<string | null>;
  map: FormControl<string | null>;
  started: boolean;
  finished: boolean;
  miniatures: string;

  constructor(
    private readonly ref: MatDialogRef<CampaignEditDialogComponent, Encounter>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
    private readonly snackBar: MatSnackBar,
    private readonly campaignService: CampaignsService,
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService,
    private readonly itemService: ItemService,
    private readonly npcService: NpcService,
  ) {
    this.name = new FormControl(data.encounter?.name || '', [Validators.required]);
    this.id = new FormControl(data.encounter?.id || '', [
      Validators.required,
      validateId(data.adventure, data.duplicate ? undefined : data.encounter?.id),
    ]);
    this.locations = new FormControl(data.encounter?.locations?.join('; ') || '');
    this.npcs = new FormControl(data.encounter?.npcNames?.join('; ') || '');
    this.monsters = new FormControl(data.encounter?.monsterNames.map((m) => m.toString()).join('; ') || '', [
      Validators.pattern(VALIDATE),
    ]);
    this.spells = new FormControl(data.encounter?.spellNames?.join('; ') || '');
    this.items = new FormControl(data.encounter?.itemNames.map((m) => m.toString()).join('; ') || '', [
      Validators.pattern(VALIDATE),
    ]);
    this.images = new FormControl(data.encounter?.images?.join(';') || '');
    this.sounds = new FormControl(data.encounter?.sounds?.join(';') || '');
    this.notes = new FormControl(data.encounter?.notes?.join('\n') || '');
    this.map = new FormControl(data.encounter?.map || '');
    this.miniatures = data.duplicate ? '' : data.encounter?.miniaturesData || '';
    this.started = data.encounter?.isStarted() || false;
    this.finished = data.encounter?.isFinished() || false;
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    if (this.name.valid && this.id.valid) {
      this.ref.close(
        new Encounter(
          this.campaignService,
          this.spellService,
          this.monsterService,
          this.itemService,
          this.npcService,
          this.data.adventure,
          this.name.value || '<none>',
          this.id.value || '<none>',
          EncounterEditDialogComponent.parseList(this.locations.value),
          EncounterEditDialogComponent.parseList(this.npcs.value),
          EncounterEditDialogComponent.parseCountedList(this.monsters.value),
          EncounterEditDialogComponent.parseList(this.spells.value),
          EncounterEditDialogComponent.parseCountedList(this.items.value),
          this.miniatures,
          EncounterEditDialogComponent.simplifyLinks(this.images.value),
          EncounterEditDialogComponent.simplifyLinks(this.sounds.value),
          this.notes.value?.split(/\s*\n\s*/).filter((l) => !!l) || [],
          this.map.value || '',
          this.started,
          this.finished,
        ),
      );
    } else {
      this.snackBar.open('You need valid values for name and id!', 'Dismiss');
    }
  }

  private static simplifyLinks(links: string | null): string[] {
    return this.parseList(links)
      .map((s) => Link.parse(s))
      .map((l) => l.toSimpleString());
  }

  private static parseList(text: string | null): string[] {
    if (!text?.trim()) {
      return [];
    }

    return text.split(/;\s*/);
  }

  private static parseCountedList(text: string | null): Counted[] {
    if (!text?.trim()) {
      return [];
    }

    return text.split(/\;\s*/).map(Counted.fromString);
  }
}

function validateId(adventure: Adventure, allowed?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value !== allowed && adventure.hasEncounterId(control.value)) {
      return { exists: control.value };
    }

    return null;
  };
}
