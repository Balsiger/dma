import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Monster } from '../../../data/entities/monster';
import { MonsterService } from '../../../services/monster.service';
import { EntitiesGridComponent } from '../../common/entities-grid/entities-grid.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';

@Component({
  selector: 'app-monsters',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.scss'
})
export class MonstersComponent {
  monsters: Monster[] = [];

  constructor(private readonly monsterService: MonsterService) {
    this.load();
  }

  async load() {
    this.monsters = await this.monsterService.getAll();
  }
}
