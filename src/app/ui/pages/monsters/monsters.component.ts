import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Monster } from '../../../data/entities/monster';
import { Campaign } from '../../../data/things/campaign';
import { Alignment } from '../../../data/values/enums/alignment';
import { MonsterTag, MonsterType } from '../../../data/values/enums/monster_type';
import { Rational } from '../../../data/values/rational';
import { Size } from '../../../data/values/size';
import { MonsterService } from '../../../services/monster.service';
import { EntitiesGridComponent } from '../../common/entities-grid/entities-grid.component';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';

@Component({
  selector: 'monsters',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.scss',
})
export class MonstersComponent {
  @Input() embed = false;
  @Input() campaign?: Campaign;
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
