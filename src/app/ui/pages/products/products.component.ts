import { Component, OnInit, input } from '@angular/core';
import { Campaign } from '../../../data/entities/fluid/campaign';
import { Product } from '../../../data/entities/static/product';
import { GameSystem } from '../../../data/entities/static/values/enums/game_system';
import { EntitiesService } from '../../../services/entity/entities.service';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../../entities/entities-grid.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'products',
  imports: [PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  embed = input(false);
  campaign = input<Campaign>();

  products: Product[] = [];
  filters: Filter[] = [];

  constructor(readonly entitiesService: EntitiesService) {}

  async ngOnInit() {
    await this.entitiesService.ensureLoaded();
    this.products = this.entitiesService.products.getAll();

    this.filters = [
      {
        label: 'Name',
      },
      {
        label: 'ID',
      },
      {
        label: 'Person',
      },
      {
        label: 'System',
        options: GameSystem.systems.map((s) => ({ label: s.name, value: s })),
        multiple: true,
      },
    ];
  }
}
