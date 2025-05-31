import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Character } from '../../../data/facts/character';
import { DialogComponent } from '../../common/dialog/dialog.component';

export interface ParticipantField {
  label: string;
  control: FormControl<number | null>;
}

export interface ParticipantInitiative {
  name: string;
  initiative: number;
}

@Component({
    selector: 'initiative-setup-dialog',
    imports: [DialogComponent, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
    templateUrl: './initiative-setup-dialog.component.html',
    styleUrl: './initiative-setup-dialog.component.scss'
})
export class InitiativeSetupDialogComponent {
  participants: ParticipantField[];

  constructor(
    private readonly ref: MatDialogRef<InitiativeSetupDialogComponent, ParticipantInitiative[]>,
    @Inject(MAT_DIALOG_DATA) readonly characters: Character[],
  ) {
    this.participants = characters.map((c) => ({
      label: c.name(),
      control: new FormControl(null),
    }));
    this.participants.push({ label: 'Monsters', control: new FormControl(Math.floor(Math.random() * 20) + 1) });
    this.participants.push({ label: 'Other', control: new FormControl(null) });
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(
      this.participants
        .filter((p) => p.control.value !== null)
        .map((p) => ({ name: p.label, initiative: p.control.value || 0 })),
    );
  }
}
