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
import { Counted } from 'src/app/data/facts/factoids/counted';
import { Adventure } from '../../../data/facts/adventure';
import { Encounter, Data as EncounterData } from '../../../data/facts/encounter';
import { Data as CountedData, VALIDATE } from '../../../data/facts/factoids/counted';
import { Link } from '../../../data/values/link';
import { EntityServices } from '../../../services/entity/entity_services';
import { EncounterService } from '../../../services/fact/encounter.service';
import { DialogComponent } from '../../common/dialog/dialog.component';
import { CampaignEditDialogComponent } from '../campaign-edit-dialog.component';

export interface EditData {
  adventure: Adventure;
  encounter?: Encounter;
  service?: EncounterService;
  duplicate?: boolean;
}

@Component({
  selector: 'encounter-edit-dialog',
  templateUrl: './encounter-edit-dialog.component.html',
  styleUrls: ['./encounter-edit-dialog.component.scss'],
  standalone: true,
  imports: [DialogComponent, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatCheckboxModule],
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
    private readonly entityServices: EntityServices,
  ) {
    const encounterData: EncounterData = data.encounter?.toData() || {};
    this.name = new FormControl(data.encounter?.name() || '', [Validators.required]);
    this.id = new FormControl(data.encounter?.id() || '', [
      Validators.required,
      validateId(data.adventure, data.duplicate ? undefined : data.encounter?.id()),
    ]);
    this.locations = new FormControl(data.encounter?.locations()?.join('; ') || '');
    this.npcs = new FormControl(encounterData.npcs?.join(';') || '');
    this.monsters = new FormControl(encounterData.monsters?.map((m) => `${m.count}x ${m.name}`).join('; ') || '', [
      Validators.pattern(VALIDATE),
    ]);
    this.spells = new FormControl(encounterData.spells?.join('; ') || '');
    this.items = new FormControl(encounterData.items?.map((m) => `${m.count}x ${m.name}`).join('; ') || '', [
      Validators.pattern(VALIDATE),
    ]);
    this.images = new FormControl(encounterData.images?.join(';') || '');
    this.sounds = new FormControl(encounterData.sounds?.join(';') || '');
    this.notes = new FormControl(encounterData.notes?.join('\n') || '');
    this.map = new FormControl(encounterData.map || '');
    this.miniatures = data.duplicate ? '' : encounterData?.miniatures || '';
    this.started = data.encounter?.isStarted() || false;
    this.finished = data.encounter?.isFinished() || false;
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    if (this.name.valid && this.id.valid && this.data.service) {
      this.ref.close(
        new Encounter(this.data.service, this.entityServices, this.data.adventure, {
          id: this.id.value || '<none>',
          name: this.name.value || '<none>',
          locations: EncounterEditDialogComponent.parseList(this.locations.value),
          npcs: EncounterEditDialogComponent.parseList(this.npcs.value),
          monsters: EncounterEditDialogComponent.parseCountedDataList(this.monsters.value),
          spells: EncounterEditDialogComponent.parseList(this.spells.value),
          items: EncounterEditDialogComponent.parseCountedDataList(this.items.value),
          miniatures: this.miniatures,
          images: EncounterEditDialogComponent.simplifyLinks(this.images.value),
          sounds: EncounterEditDialogComponent.simplifyLinks(this.sounds.value),
          notes: this.notes.value?.split(/\s*\n\s*/).filter((l) => !!l) || [],
          map: this.map.value || '',
          started: this.started,
          finished: this.finished,
        }),
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

  private static parseCountedDataList(text: string | null): CountedData[] {
    if (!text?.trim()) {
      return [];
    }

    return text
      .split(/\;\s*/)
      .map(Counted.fromString)
      .map((c) => c.toData());
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
