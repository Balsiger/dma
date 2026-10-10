import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getApp } from 'firebase/app';
import { Campaign } from '../../../data/entities/fluid/campaign';
import { Group } from '../../../data/entities/immutable/group';
import { ImmutablesService } from '../../../services/immutable/immutables.service';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../../entities/entities-grid.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'groups',
  imports: [PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './groups.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './groups.component.scss',
})
export class GroupsComponent implements OnInit {
  embed = input(false);
  campaign = input<Campaign>();
  private readonly analytics = getAnalytics(getApp());

  groups: Group[] = [];
  filters: Filter[] = [];

  constructor(private readonly entitiesService: ImmutablesService) {}

  async ngOnInit(): Promise<void> {
    logEvent(this.analytics, 'DMA - Groups');
    await this.entitiesService.ensureLoaded();
    this.groups = this.entitiesService.groups.getAll();

    this.filters = [
      {
        label: 'Name',
      },
    ];
  }
}
