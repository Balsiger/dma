import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Campaign } from '../../../../data/things/campaign';
import { Condition } from '../../../../data/things/condition';
import { FormatterPipe } from '../../../common/formatter.pipe';
import { ConditionDialogComponent } from '../condition-dialog/condition-dialog.component';
import { EntityComponent } from '../entity/entity.component';

@Component({
  selector: 'condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss'],
  standalone: true,
  imports: [forwardRef(() => EntityComponent), FormatterPipe],
})
export class ConditionComponent {
  @Input() condition!: Condition;
  @Input() campaign?: Campaign;
  @Input() overview = true;
  @Input() collapsed = true;

  @Output() expand = new EventEmitter<void>();
  @Output() collapse = new EventEmitter<void>();

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(ConditionDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        item: this.condition,
        campaign: this.campaign,
      },
    });
  }
}
