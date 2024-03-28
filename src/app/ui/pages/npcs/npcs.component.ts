import { Component, Input } from '@angular/core';
import { NPC } from '../../../data/entities/npc';
import { Campaign } from '../../../data/things/campaign';
import { NpcService } from '../../../services/npc.service';
import { EntitiesGridComponent } from '../../common/entities-grid/entities-grid.component';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';

@Component({
  selector: 'npcs',
  standalone: true,
  imports: [PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './npcs.component.html',
  styleUrl: './npcs.component.scss',
})
export class NpcsComponent {
  @Input() embed = false;
  @Input() campaign?: Campaign;
  npcs: NPC[] = [];
  filters: Filter[] = [];

  constructor(private readonly npcService: NpcService) {
    this.load();
  }

  async load() {
    this.npcs = await this.npcService.getAll();
    this.filters = [{ label: 'Name' }];
  }
}
