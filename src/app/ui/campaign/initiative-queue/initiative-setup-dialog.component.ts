import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Creature, CreatureType } from '../../../data/local/creature';
import { DialogComponent } from '../../common/dialog/dialog.component';

export interface ParticipantField {
  name: string;
  label: string;
  type: CreatureType;
  control: FormControl<number | null>;
}

export interface ParticipantInitiative {
  name: string;
  label: string;
  type: CreatureType;
  initiative: number;
}

export interface Data {
  creatures: Creature[];
}

@Component({
  selector: 'initiative-setup-dialog',
  imports: [DialogComponent, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './initiative-setup-dialog.component.html',
  styleUrl: './initiative-setup-dialog.component.scss',
})
export class InitiativeSetupDialogComponent {
  participants: ParticipantField[];

  constructor(
    private readonly ref: MatDialogRef<InitiativeSetupDialogComponent, ParticipantInitiative[]>,
    @Inject(MAT_DIALOG_DATA) readonly data: Data,
  ) {
    this.participants = data.creatures.map((c) => ({
      label: c.uniqueName,
      name: c.name,
      type: c.type,
      control: new FormControl(
        c.type === 'character' ? null : Math.floor(Math.random() * 20) + 1 + c.initiativeModifier,
      ),
    }));
    this.participants.push({
      name: 'Other',
      label: 'Other',
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
        .map((p) => ({ name: p.name, label: p.label, type: p.type, initiative: p.control.value || 0 })),
    );
  }
}
