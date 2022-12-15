import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Adventure } from '../../../../data/things/adventure';
import { Counted, Encounter, VALIDATE } from '../../../../data/things/encounter';
import { ItemService } from '../../../../services/item.service';
import { MonsterService } from '../../../../services/monster.service';
import { SpellService } from '../../../../services/spell.service';
import { CampaignEditDialogComponent } from '../../campaigns/campaign-edit-dialog/campaign-edit-dialog.component';
import { EditData } from '../adventure/adventure.component';

@Component({
  selector: 'encounter-edit-dialog',
  templateUrl: './encounter-edit-dialog.component.html',
  styleUrls: ['./encounter-edit-dialog.component.scss'],
})
export class EncounterEditDialogComponent {
  name: FormControl<string | null>;
  id: FormControl<string | null>;
  locations: FormControl<string | null>;
  monsters: FormControl<string | null>;
  spells: FormControl<string | null>;
  items: FormControl<string | null>;
  images: FormControl<string | null>;
  notes: FormControl<string | null>;
  map: FormControl<string | null>;
  started: boolean;
  finished: boolean;
  miniatures: string;

  constructor(
    private readonly ref: MatDialogRef<CampaignEditDialogComponent, Encounter>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
    private readonly snackBar: MatSnackBar,
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService,
    private readonly itemService: ItemService
  ) {
    this.name = new FormControl(data.encounter?.name || '', [
      Validators.required,
      validateName(data.adventure, data.encounter?.name),
    ]);
    this.id = new FormControl(data.encounter?.id || '', [
      Validators.required,
      validateId(data.adventure, data.encounter?.id),
    ]);
    this.locations = new FormControl(data.encounter?.locations?.join('; ') || '');
    this.monsters = new FormControl(data.encounter?.monsterNames.map((m) => m.toString()).join('; ') || '', [
      Validators.pattern(VALIDATE),
    ]);
    this.spells = new FormControl(data.encounter?.spellNames?.join('; ') || '');
    this.items = new FormControl(data.encounter?.itemNames.map((m) => m.toString()).join('; ') || '', [
      Validators.pattern(VALIDATE),
    ]);
    this.images = new FormControl(data.encounter?.images?.join(';') || '');
    this.notes = new FormControl(data.encounter?.notes?.join('\n') || '');
    this.map = new FormControl(data.encounter?.map || '');
    this.miniatures = data.encounter?.miniaturesData || '';
    this.started = data.encounter?.started || false;
    this.finished = data.encounter?.finished || false;
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    if (this.name.valid && this.id.valid) {
      this.ref.close(
        new Encounter(
          this.spellService,
          this.monsterService,
          this.itemService,
          this.data.adventure,
          this.name.value || '<none>',
          this.id.value || '<none>',
          EncounterEditDialogComponent.parseList(this.locations.value),
          EncounterEditDialogComponent.parseCountedList(this.monsters.value),
          EncounterEditDialogComponent.parseList(this.spells.value),
          EncounterEditDialogComponent.parseCountedList(this.items.value),
          this.miniatures,
          this.images.value?.split(/\s*;\s*/) || [],
          this.notes.value?.split(/\s*\n\s*/).filter((l) => !!l) || [],
          this.map.value || '',
          this.started,
          this.finished
        )
      );
    } else {
      this.snackBar.open('You need valid values for name and id!', 'Dismiss');
    }
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

function validateName(adventure: Adventure, allowed?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value !== allowed && adventure.hasEncounterName(control.value)) {
      return { exists: control.value };
    }

    return null;
  };
}

function validateId(adventure: Adventure, allowed?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value !== allowed && adventure.hasEncounterId(control.value)) {
      return { exists: control.value };
    }

    return null;
  };
}
