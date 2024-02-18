import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Miniature } from '../../../data/entities/miniature';
import { MiniaturesService } from '../../../services/miniatures.service';
import { EntitiesGridComponent } from '../../common/entities-grid/entities-grid.component';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';

@Component({
  selector: 'app-n-miniatures',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './miniatures.component.html',
  styleUrl: './miniatures.component.scss',
})
export class MiniaturesComponent {
  miniatures: Miniature[] = [];
  filters: Filter[] = [];

  // TODO: Replace the following with proper enums.
  types: string[] = [];
  subtypes: string[] = [];
  races: string[] = [];
  classes: string[] = [];
  locations: string[] = [];
  sets: string[] = [];

  constructor(private readonly miniatureService: MiniaturesService) {
    this.load();
  }

  async load() {
    this.miniatures = await this.miniatureService.getAll();
    this.filters = await this.miniatureService.getFilters();
  }
}
