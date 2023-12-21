import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JournalEntry } from '../journal/journal-entry';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from '../../../common/dialog/dialog.component';

@Component({
    selector: 'app-journal-edit-dialog',
    templateUrl: './journal-edit-dialog.component.html',
    styleUrls: ['./journal-edit-dialog.component.scss'],
    standalone: true,
    imports: [
        DialogComponent,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        NgFor,
    ],
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
