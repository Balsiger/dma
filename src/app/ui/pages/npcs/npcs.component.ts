import { Component, OnInit, input } from '@angular/core';
import { NPCEntity } from '../../../data/entities/npc-entity';
import { Campaign } from '../../../data/facts/campaign';
import { EntitiesService } from '../../../services/entity/entities.service';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../../entities/entities-grid.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'npcs',
  imports: [PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './npcs.component.html',
  styleUrl: './npcs.component.scss',
})
export class NpcsComponent implements OnInit {
  embed = input(false);
  campaign = input<Campaign>();

  npcs: NPCEntity[] = [];
  filters: Filter[] = [];

  constructor(private readonly entitiesService: EntitiesService) {}

  async ngOnInit() {
    await this.entitiesService.ensureLoaded();
    this.npcs = this.entitiesService.npcs.getAll();
    this.filters = [{ label: 'Name' }];
  }
}
