import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Campaign } from '../../../data/facts/campaign';
import { EntitiesService } from '../../../services/entity/entities.service';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../../entities/entities-grid.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';
import { Glossary } from '../../../data/facts/glossary';

@Component({
    selector: 'glossaries',
    imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
    templateUrl: './glossaries.component.html',
    styleUrl: './glossaries.component.scss'
})
export class GlossariesComponent {
  embed = input(false);
  campaign = input<Campaign>();

  glossaries: Glossary[] = [];
  filters: Filter[] = [];

  constructor(private readonly entitiesService: EntitiesService) {
    this.load();
  }

  async load() {
    await this.entitiesService.ensureLoaded();
    this.glossaries = this.entitiesService.glossary.getAll();

    this.filters = [{ label: 'Name' }];
  }
}
