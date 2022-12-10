import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Adventure } from '../../../../data/adventure';
import { Campaign } from '../../../../data/Campaign';

export interface EditData {
  campaign: Campaign;
  adventure?: Adventure;
}

@Component({
  selector: 'adventure-edit-dialog',
  templateUrl: './adventure-edit-dialog.component.html',
  styleUrls: ['./adventure-edit-dialog.component.scss'],
})
export class AdventureEditDialogComponent {
  name: FormControl<string | null>;
  image: FormControl<string | null>;
  levels: FormControl<string | null>;

  constructor(
    private readonly ref: MatDialogRef<AdventureEditDialogComponent, EditData>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
    private readonly snackBar: MatSnackBar
  ) {
    this.name = new FormControl(data.adventure?.name || '', [Validators.required]);
    this.image = new FormControl(data.adventure?.image || '');
    this.levels = new FormControl(data.adventure?.levels || '');
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    if (this.name.valid) {
      this.ref.close(
        new Adventure(
          this.data.campaign,
          this.name.value || '<no name>',
          this.image.value || '',
          this.levels.value || ''
        )
      );
    } else {
      this.snackBar.open('You need a valid name!', 'Dismiss');
    }
  }
}
