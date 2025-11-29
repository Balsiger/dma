import { CommonModule } from '@angular/common';
import { Component, OnInit, input } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { Spell } from '../../../data/entities/spell';
import { School } from '../../../data/entities/values/enums/school';
import { SpellClass } from '../../../data/entities/values/enums/spell-class';
import { Campaign } from '../../../data/facts/campaign';
import { EntitiesService } from '../../../services/entity/entities.service';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../../entities/entities-grid.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'spells',
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss',
})
export class SpellsComponent implements OnInit {
  embed = input(false);
  campaign = input<Campaign>();

  spells: Spell[] = [];
  filters: Filter[] = [];

  constructor(
    private readonly entitiesService: EntitiesService,
    private readonly analytics: Analytics,
  ) {}

  async ngOnInit(): Promise<void> {
    logEvent(this.analytics, 'DMA - Spells');
    await this.entitiesService.ensureLoaded();
    this.spells = this.entitiesService.spells.getAll();

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
