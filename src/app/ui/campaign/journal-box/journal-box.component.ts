import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Campaign } from '../../../data/facts/campaign';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { JournalEntry } from '../../pages/campaign/journal/journal-entry';
import { JournalComponent } from '../../pages/campaign/journal/journal.component';

@Component({
  selector: 'journal-box',
  standalone: true,
  imports: [CommonModule, ExpandingBoxComponent, JournalComponent],
  templateUrl: './journal-box.component.html',
  styleUrl: './journal-box.component.scss',
})
export class JournalBoxComponent {
  Array = Array;

  @Input() campaign?: Campaign;
  @Input() entries: JournalEntry[] = [];
}
