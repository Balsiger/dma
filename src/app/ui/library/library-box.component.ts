import { Component, input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Campaign } from '../../data/facts/campaign';
import { ExpandingBoxComponent } from '../common/expanding-box/expanding-box.component';
import { ItemsComponent } from '../item/items.component';
import { ConditionsComponent } from '../pages/conditions/conditions.component';
import { MiniaturesComponent } from '../pages/miniatures/miniatures.component';
import { MonstersComponent } from '../pages/monsters/monsters.component';
import { NpcsComponent } from '../pages/npcs/npcs.component';
import { ProductsComponent } from '../pages/products/products.component';
import { SpellsComponent } from '../pages/spells/spells.component';

@Component({
  selector: 'library-box',
  standalone: true,
  imports: [
    ConditionsComponent,
    ExpandingBoxComponent,
    ItemsComponent,
    MatTabsModule,
    MiniaturesComponent,
    MonstersComponent,
    ProductsComponent,
    SpellsComponent,
    NpcsComponent,
  ],
  templateUrl: './library-box.component.html',
  styleUrl: './library-box.component.scss',
})
export class LibraryBoxComponent {
  campaign = input<Campaign>();
}
