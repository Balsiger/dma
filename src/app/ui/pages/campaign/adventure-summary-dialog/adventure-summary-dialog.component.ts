import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Adventure } from '../../../../data/things/adventure';
import { EditData } from '../adventure/adventure.component';

@Component({
  selector: 'app-adventure-summary-dialog',
  templateUrl: './adventure-summary-dialog.component.html',
  styleUrls: ['./adventure-summary-dialog.component.scss'],
})
export class AdventureSummaryDialogComponent {
  readonly adventure: Adventure;

  constructor(@Inject(MAT_DIALOG_DATA) readonly data: EditData) {
    this.adventure = data.adventure;
  }
}
