import { Component, OnInit, input } from '@angular/core';
import { NPC } from '../../../data/entities/npc';
import { Campaign } from '../../../data/facts/campaign';
import { NpcService } from '../../../services/entity/npc.service';
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

  constructor(private readonly npcService: NpcService) {}

  async ngOnInit(): Promise<void> {
    this.npcs = await this.npcService.getAll();
    this.filters = [{ label: 'Name' }];
  }
}
