import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Campaign } from '../../../data/facts/campaign';
import { JournalEntry } from '../../../services/fact/journal-entry';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { JournalComponent } from './journal.component';

@Component({
    selector: 'journal-box',
    imports: [CommonModule, ExpandingBoxComponent, JournalComponent],
    templateUrl: './journal-box.component.html',
    styleUrl: './journal-box.component.scss'
})
export class JournalBoxComponent {
  Array = Array;

  campaign = input<Campaign>();
  entries = input<JournalEntry[]>([]);
}
