import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { JournalEntry } from '../journal/journal-entry';

@Component({
  selector: 'app-journal-edit-dialog',
  templateUrl: './journal-edit-dialog.component.html',
  styleUrls: ['./journal-edit-dialog.component.scss'],
})
export class JournalEditDialogComponent {
  campaignDate: FormControl<string | null>;
  realDates: FormControl<string | null>;
  notes: FormControl<string | null>[];

  constructor(
    private readonly ref: MatDialogRef<JournalEditDialogComponent, JournalEntry>,
    @Inject(MAT_DIALOG_DATA) readonly entry: JournalEntry
  ) {
    this.campaignDate = new FormControl(entry.campaignDate, [Validators.required]);
    this.realDates = new FormControl(entry?.realDates.join(', '));
    this.notes = entry?.notes.map((n) => new FormControl(n));
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(
      new JournalEntry(
        this.entry.campaign,
        this.campaignDate.value || '',
        this.realDates.value?.split(/\s*,\s*/) || [],
        this.notes.map((n) => n.value || '').filter((n) => !!n)
      )
    );
  }
}
