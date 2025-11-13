import { Component, forwardRef, input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Trap } from '../../data/entities/trap';
import { Campaign } from '../../data/facts/campaign';
import { EntityComponent } from '../entities/entity.component';
import { FormatterPipe } from '../pipes/formatter.pipe';
import { TrapDialogComponent } from './trap-dialog.component';

@Component({
  selector: 'trap',
  templateUrl: './trap.component.html',
  styleUrls: ['./trap.component.scss'],
  imports: [FormatterPipe, MatTooltipModule, forwardRef(() => EntityComponent)],
})
export class TrapComponent {
  trap = input<Trap>();
  campaign = input<Campaign>();
  overview = input(true);
  count = input(1);

  collapsed = model(true);

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(TrapDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        trap: this.trap(),
        campaign: this.campaign(),
      },
    });
  }
}
