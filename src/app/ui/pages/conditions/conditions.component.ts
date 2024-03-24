import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Campaign } from '../../../data/things/campaign';
import { Condition } from '../../../data/things/condition';
import { ConditionService } from '../../../services/condition.service';
import { EntitiesGridComponent } from '../../common/entities-grid/entities-grid.component';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';

@Component({
  selector: 'conditions',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.scss',
})
export class ConditionsComponent {
  @Input() embed = false;
  @Input() campaign?: Campaign;
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
