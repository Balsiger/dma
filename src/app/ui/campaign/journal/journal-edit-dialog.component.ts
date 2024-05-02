import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JournalEntry } from '../../../services/fact/journal-entry';
import { DialogComponent } from '../../common/dialog/dialog.component';

@Component({
  selector: 'journal-edit-dialog',
  templateUrl: './journal-edit-dialog.component.html',
  styleUrls: ['./journal-edit-dialog.component.scss'],
  standalone: true,
  imports: [DialogComponent, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
})
export class JournalEditDialogComponent {
  campaignDate: FormControl<string | null>;
  realDates: FormControl<string | null>;
  notes: FormControl<string | null>[];

  constructor(
    private readonly ref: MatDialogRef<JournalEditDialogComponent, JournalEntry>,
    @Inject(MAT_DIALOG_DATA) readonly entry: JournalEntry,
  ) {
    this.campaignDate = new FormControl(entry.date().toDateString(), [Validators.required]);
    this.realDates = new FormControl(entry?.realDates().join(', '));
    this.notes = entry?.notes().map((n) => new FormControl(n));
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(
      this.entry.campaign.createJournalEntry({
        campaignDate: this.campaignDate.value || '',
        realDates: this.realDates.value?.split(/\s*,\s*/) || [],
        notes: this.notes.map((n) => n.value || '').filter((n) => !!n),
      }),
    );
  }
}
