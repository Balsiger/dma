import { Component, OnInit, input } from '@angular/core';
import { NPC } from '../../../data/entities/npc';
import { Campaign } from '../../../data/facts/campaign';
import { EntitiesService } from '../../../services/entity/entities.service';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../../entities/entities-grid.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'npcs',
  standalone: true,
  imports: [PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './npcs.component.html',
  styleUrl: './npcs.component.scss',
})
export class NpcsComponent implements OnInit {
  embed = input(false);
  campaign = input<Campaign>();

  npcs: NPC[] = [];
  filters: Filter[] = [];

  constructor(private readonly entitiesService: EntitiesService) {}

  async ngOnInit() {
    await this.entitiesService.ensureLoaded();
    this.npcs = this.entitiesService.npcs.getAll();
    this.filters = [{ label: 'Name' }];
  }
}
