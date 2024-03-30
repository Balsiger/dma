import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Spell } from '../../../data/entities/spell';
import { School } from '../../../data/entities/values/enums/school';
import { SpellClass } from '../../../data/entities/values/enums/spell_class';
import { Campaign } from '../../../data/facts/campaign';
import { SpellService } from '../../../services/spell.service';
import { EntitiesGridComponent } from '../../common/entities-grid/entities-grid.component';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';

@Component({
  selector: 'spells',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss',
})
export class SpellsComponent {
  @Input() embed = false;
  @Input() campaign?: Campaign;
  spells: Spell[] = [];
  filters: Filter[] = [];

  constructor(private readonly spellService: SpellService) {
    this.load();
  }

  async load() {
    this.spells = await this.spellService.getAll();

    this.filters = [
      {
        label: 'Name',
      },
      {
        label: 'School',
        options: School.schools.map((s) => ({ label: s.name, value: s })),
        multiple: true,
      },
      {
        label: 'Class',
        options: SpellClass.classes.map((s) => ({ label: s.name, value: s })),
        multiple: true,
      },
      {
        label: 'Level',
        options: [
          { label: 'Cantrip', value: 0 },
          { label: '1st', value: 1 },
          { label: '2nd', value: 2 },
          { label: '3rd', value: 3 },
          { label: '4th', value: 4 },
          { label: '5th', value: 5 },
          { label: '6th', value: 6 },
          { label: '7th', value: 7 },
          { label: '8th', value: 8 },
          { label: '9th', value: 9 },
        ],
        multiple: true,
      },
      {
        label: 'Ritual',
        options: [
          { label: 'Yes', value: true },
          { label: 'No', value: false },
        ],
      },
    ];
  }
}
