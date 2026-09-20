import { Component, forwardRef, input, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Condition } from '../../data/entities/fluid/condition';
import { EntityComponent } from '../entities/entity.component';
import { FormatterPipe } from '../pipes/formatter.pipe';
import { ConditionDialogComponent } from './condition-dialog.component';

@Component({
  selector: 'condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss'],
  imports: [forwardRef(() => EntityComponent), FormatterPipe],
})
export class ConditionComponent {
  condition = input.required<Condition>();
  campaign = input<Campaign>();
  overview = input(true);
  collapsed = input(true);

  expand = output<void>();
  collapse = output<void>();

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(ConditionDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        condition: this.condition(),
        campaign: this.campaign(),
      },
    });
  }
}
