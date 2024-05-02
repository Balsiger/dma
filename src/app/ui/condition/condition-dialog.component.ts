import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../../data/facts/campaign';
import { Condition } from '../../data/facts/condition';
import { ScreenImageButtonComponent } from '../campaign/screen/screen-image-button.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { ConditionComponent } from './condition.component';

export interface Data {
  condition: Condition;
  campaign?: Campaign;
}

@Component({
  selector: 'condition-dialog',
  templateUrl: './condition-dialog.component.html',
  styleUrls: ['./condition-dialog.component.scss'],
  standalone: true,
  imports: [ConditionComponent, ScreenImageButtonComponent, FormattedTextComponent],
})
export class ConditionDialogComponent {
  readonly condition: Condition;
  readonly campaign?: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data, changeDetector: ChangeDetectorRef) {
    this.condition = data.condition;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
