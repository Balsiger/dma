import { Component, ElementRef, ViewChild, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/facts/campaign';
import { JournalEntry } from '../../../services/fact/journal-entry';
import { JournalEditDialogComponent } from './journal-edit-dialog.component';

@Component({
    selector: 'journal',
    templateUrl: './journal.component.html',
    styleUrls: ['./journal.component.scss'],
    imports: [MatButtonModule, MatIconModule, MatTooltipModule]
})
export class JournalComponent {
  @ViewChild('note') note!: ElementRef<HTMLInputElement>;

  campaign = input<Campaign>();
  up = input(false);
  left = input(false);
  expanded = model(true);

  constructor(private readonly dialog: MatDialog) {}

  onToggle() {
    this.expanded.set(!this.expanded);
  }

  onAddNote(entry: JournalEntry, value: string) {
    entry.addNote(value);
    if (this.campaign()) {
      this.campaign()?.setJournalEntry(entry);
    }

    this.note.nativeElement.value = '';
  }

  async onEditJournal(entry: JournalEntry) {
    const dialog = this.dialog.open(JournalEditDialogComponent, { data: entry });

    const newEntry = await firstValueFrom(dialog.afterClosed());
    if (newEntry) {
      this.campaign()?.setJournalEntry(newEntry);
    }
  }
}
