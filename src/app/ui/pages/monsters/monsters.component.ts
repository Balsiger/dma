import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Monster } from '../../../data/entities/monster';
import { Alignment } from '../../../data/entities/values/enums/alignment';
import { MonsterTag, MonsterType } from '../../../data/entities/values/enums/monster_type';
import { Size } from '../../../data/entities/values/size';
import { Campaign } from '../../../data/facts/campaign';
import { Rational } from '../../../data/values/rational';
import { MonsterService } from '../../../services/entity/monster.service';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../../entities/entities-grid.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'monsters',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.scss',
})
export class MonstersComponent {
  embed = input(false);
  campaign = input<Campaign>();

  monsters: Monster[] = [];
  crs: Rational[] = [];
  hitDices: number[] = [];
  filters: Filter[] = [];

  constructor(private readonly monsterService: MonsterService) {
    this.load();
  }

  async load() {
    this.monsters = await this.monsterService.getAll();
    this.crs = Array.from(new Map(this.monsters.map((m) => [m.challenge.toString(), m.challenge])).values());
    this.crs.sort(Rational.compare);
    this.hitDices = Array.from(new Set(this.monsters.map((m) => m.hitDice.number)));
    this.hitDices.sort((a, b) => a - b);

    this.filters = [
      {
        label: 'Name',
      },
      {
        label: 'Size',
        options: Size.sizes.map((s) => ({ label: s.name, value: s })),
        multiple: true,
      },
      {
        label: 'Type',
        options: MonsterType.types.map((t) => ({ label: t.name, value: t })),
        multiple: true,
      },
      {
        label: 'Tag',
        options: MonsterTag.tags.map((t) => ({ label: t.name, value: t })),
        multiple: true,
      },
      {
        label: 'Alignment',
        options: Alignment.alignments.map((a) => ({ label: a.name, value: a })),
        multiple: true,
      },
      {
        label: 'CR',
        options: this.crs.map((cr) => ({ label: cr.toString(), value: cr })),
      },
      {
        label: 'Hit Dice',
        options: this.hitDices.map((h) => ({ label: '' + h, value: h })),
      },
    ];
  }
}
