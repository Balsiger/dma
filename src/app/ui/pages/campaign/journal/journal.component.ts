import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../../data/facts/campaign';
import { CampaignsService } from '../../../../services/campaigns.service';
import { JournalEditDialogComponent } from '../journal-edit-dialog/journal-edit-dialog.component';
import { JournalEntry } from './journal-entry';

@Component({
  selector: 'journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
  standalone: true,
  imports: [NgFor, MatButtonModule, MatIconModule, MatTooltipModule, NgIf],
})
export class JournalComponent {
  @ViewChild('note') note!: ElementRef<HTMLInputElement>;

  @Input() campaign?: Campaign;
  @Input() expanded = true;
  @Input() up = false;
  @Input() left = false;

  constructor(
    private readonly campaignService: CampaignsService,
    private readonly dialog: MatDialog,
  ) {}

  onToggle() {
    this.expanded = !this.expanded;
  }

  onAddNote(entry: JournalEntry, value: string) {
    entry.addNote(value);
    this.campaignService.setJournalEntry(entry);

    this.note.nativeElement.value = '';
  }

  async onEditJournal(entry: JournalEntry) {
    const dialog = this.dialog.open(JournalEditDialogComponent, { data: entry });

    const newEntry = await firstValueFrom(dialog.afterClosed());
    if (newEntry) {
      this.campaignService.setJournalEntry(newEntry);
      this.campaign?.reloadJournal();
    }
  }
}
