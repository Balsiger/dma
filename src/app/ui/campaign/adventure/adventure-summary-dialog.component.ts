import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Adventure } from '../../../data/facts/adventure';
import { EditData } from '../../../data/facts/encounter';
import { AdventureSummaryComponent } from './adventure-summary.component';

@Component({
  selector: 'app-adventure-summary-dialog',
  templateUrl: './adventure-summary-dialog.component.html',
  styleUrls: ['./adventure-summary-dialog.component.scss'],
  standalone: true,
  imports: [AdventureSummaryComponent],
})
export class AdventureSummaryDialogComponent {
  readonly adventure: Adventure;

  constructor(@Inject(MAT_DIALOG_DATA) readonly data: EditData) {
    this.adventure = data.adventure;
  }
}
