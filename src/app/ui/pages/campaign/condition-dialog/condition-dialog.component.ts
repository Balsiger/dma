import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../../../../data/things/campaign';
import { Condition } from '../../../../data/things/condition';

export interface Data {
  condition: Condition;
  campaign?: Campaign;
}

@Component({
  selector: 'condition-dialog',
  templateUrl: './condition-dialog.component.html',
  styleUrls: ['./condition-dialog.component.scss'],
})
export class ConditionDialogComponent {
  readonly condition: Condition;
  readonly campaign?: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data) {
    this.condition = data.condition;
    this.campaign = data.campaign;
  }
}
