import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Creature, CreatureType } from '../../../data/local/creature';
import { DialogComponent } from '../../common/dialog/dialog.component';

export interface ParticipantField {
  name: string;
  label: string;
  number: number;
  type: CreatureType;
  modifier: number;
  control: FormControl<number | null>;
}

export interface ParticipantInitiative {
  name: string;
  label: string;
  number: number;
  type: CreatureType;
  initiative: number;
}

export interface Data {
  creatures: Creature[];
}

@Component({
  selector: 'initiative-setup-dialog',
  imports: [DialogComponent, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIcon],
  templateUrl: './initiative-setup-dialog.component.html',
  styleUrl: './initiative-setup-dialog.component.scss',
})
export class InitiativeSetupDialogComponent {
  CreatureType = CreatureType;

  participants: ParticipantField[];

  constructor(
    private readonly ref: MatDialogRef<InitiativeSetupDialogComponent, ParticipantInitiative[]>,
    @Inject(MAT_DIALOG_DATA) readonly data: Data,
  ) {
    this.participants = data.creatures.map((c) => ({
      label: c.uniqueName,
      name: c.name,
      number: c.number,
      type: c.type,
      modifier: c.initiativeModifier,
      control: new FormControl(c.type === 'character' ? null : this.roll(c.initiativeModifier)),
    }));
    this.participants.push({
      name: 'Other',
      label: 'Other',
      number: 0,
      modifier: 0,
      type: CreatureType.monster,
      control: new FormControl(null),
    });
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(
      this.participants
        .filter((p) => p.control.value !== null)
        .map((p) => ({
          name: p.name,
          label: p.label,
          number: p.number,
          type: p.type,
          initiative: p.control.value || 0,
        })),
    );
  }

  onAdvantage(participant: ParticipantField) {
    const roll = this.roll(participant.modifier);
    if (roll > Number(participant.control.value)) {
      participant.control.setValue(roll);
    }
  }

  private roll(modifier: number) {
    return Math.floor(Math.random() * 20) + 1 + modifier;
  }
}
