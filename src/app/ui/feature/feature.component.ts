import { Component, forwardRef, input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Feature } from '../../data/entities/immutable/feature';
import { Version } from '../../data/entities/immutable/values/enums/version';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { EntityComponent } from '../entities/entity.component';
import { FeatureDialogComponent } from './feature-dialog.component';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  imports: [forwardRef(() => EntityComponent), LabeledTextComponent, FormattedTextComponent],
})
export class FeatureComponent {
  campaign = input<Campaign | undefined>();
  feature = input.required<Feature>();
  overview = input(true);
  collapsed = model(true);

  Version = Version;

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(FeatureDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: { spell: this.feature(), campaign: this.campaign() },
    });
  }
}
