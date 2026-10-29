import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Feature } from '../../data/entities/immutable/feature';
import { Version } from '../../data/entities/immutable/values/enums/version';
import { ImmutablesService } from '../../services/immutable/immutables.service';
import { EntityDetailsComponent } from '../entities/entity-details.component';
import { FeatureCardComponent } from './feature-card.component';
import { FeatureComponent } from './feature.component';

export interface Data {
  feature: Feature;
  campaign?: Campaign;
}

@Component({
  selector: 'feature-dialog',
  templateUrl: './feature-dialog.component.html',
  styleUrls: ['./feature-dialog.component.scss'],
  imports: [FeatureComponent, EntityDetailsComponent, FeatureCardComponent],
})
export class FeatureDialogComponent {
  Version = Version;

  readonly feature: Feature;
  readonly campaign?: Campaign;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Data,
    changeDetector: ChangeDetectorRef,
    readonly entitiesService: ImmutablesService,
  ) {
    this.feature = data.feature;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
