import { Component, forwardRef, input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Group } from '../../data/entities/immutable/group';
import { Version } from '../../data/entities/immutable/values/enums/version';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { TaperComponent } from '../common/taper/taper.component';
import { EntityComponent } from '../entities/entity.component';
import { GroupDialogComponent } from './group-dialog.component';

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  imports: [forwardRef(() => EntityComponent), LabeledTextComponent, TaperComponent, FormattedTextComponent],
})
export class GroupComponent {
  campaign = input<Campaign | undefined>();
  group = input.required<Group>();
  overview = input(true);
  collapsed = model(true);

  Version = Version;

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(GroupDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: { spell: this.group(), campaign: this.campaign() },
    });
  }
}
