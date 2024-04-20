import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Adventure } from '../../../../data/facts/adventure';
import { Campaign } from '../../../../data/facts/campaign';
import { AdventureService } from '../../../../services/fact/adventure.service';
import { DialogComponent } from '../../../common/dialog/dialog.component';

export interface EditData {
  campaign: Campaign;
  adventure?: Adventure;
}

@Component({
  selector: 'adventure-edit-dialog',
  templateUrl: './adventure-edit-dialog.component.html',
  styleUrls: ['./adventure-edit-dialog.component.scss'],
  standalone: true,
  imports: [DialogComponent, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
})
export class AdventureEditDialogComponent {
  name: FormControl<string | null>;
  image: FormControl<string | null>;
  levels: FormControl<string | null>;

  constructor(
    private readonly ref: MatDialogRef<AdventureEditDialogComponent, EditData>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
    private readonly snackBar: MatSnackBar,
    private readonly adventureService: AdventureService,
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
          this.adventureService,
          this.data.campaign,
          this.name.value || '<no name>',
          '',
          this.image.value || '',
          this.levels.value || '',
        ),
      );
    } else {
      this.snackBar.open('You need a valid name!', 'Dismiss');
    }
  }
}
