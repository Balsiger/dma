import { Component, Input } from '@angular/core';
import { Product } from '../../../../../app/data/entities/product';
import { GameSystem } from '../../../../../app/data/entities/values/enums/game_system';
import { Campaign } from '../../../../../app/data/facts/campaign';
import { ProductsService } from '../../../../../app/services/entity/products.service';
import { EntitiesGridComponent } from '../../../../../app/ui/common/entities-grid/entities-grid.component';
import { Filter } from '../../../../../app/ui/common/filtering-line/filtering-line.component';
import { PageTitleComponent } from '../../../../../app/ui/common/page-title/page-title.component';
import { PageComponent } from '../../../../../app/ui/common/page/page.component';

@Component({
  selector: 'products',
  standalone: true,
  imports: [PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Input() embed = false;
  @Input() campaign?: Campaign;
  products: Product[] = [];
  filters: Filter[] = [];

  constructor(readonly productsService: ProductsService) {
    this.load();
  }

  private async load() {
    this.products = await this.productsService.getAll();

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
