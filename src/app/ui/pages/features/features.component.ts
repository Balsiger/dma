import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getApp } from 'firebase/app';
import { Campaign } from '../../../data/entities/fluid/campaign';
import { Feature } from '../../../data/entities/immutable/feature';
import { ImmutablesService } from '../../../services/immutable/immutables.service';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../../entities/entities-grid.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'features',
  imports: [PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './features.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './features.component.scss',
})
export class FeaturesComponent implements OnInit {
  embed = input(false);
  campaign = input<Campaign>();
  private readonly analytics = getAnalytics(getApp());

  features: Feature[] = [];
  filters: Filter[] = [];

  constructor(private readonly entitiesService: ImmutablesService) {}

  async ngOnInit(): Promise<void> {
    logEvent(this.analytics, 'DMA - Features');
    await this.entitiesService.ensureLoaded();
    this.features = this.entitiesService.features.getAll();

    this.filters = [
      {
        label: 'Name',
      },
    ];
  }
}
