import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Campaign } from '../../../data/facts/campaign';
import { Condition } from '../../../data/facts/condition';
import { ConditionService } from '../../../services/entity/condition.service';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../../entities/entities-grid.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'conditions',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.scss',
})
export class ConditionsComponent {
  embed = input(false);
  campaign = input<Campaign>();

  conditions: Condition[] = [];
  filters: Filter[] = [];

  constructor(private readonly conditionService: ConditionService) {
    this.load();
  }

  async load() {
    this.conditions = await this.conditionService.getAll();

    this.filters = [{ label: 'Name' }];
  }
}
