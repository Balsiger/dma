import { Component } from '@angular/core';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { EntitiesService } from '../../../services/entity/entities.service';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';
import { AboutTextComponent } from '../about/about-text.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  imports: [PageComponent, SelectionTileComponent, AboutTextComponent],
})
export class TitleComponent {
  user: User | null | undefined = undefined;
  itemsCount = 0;
  monsterCount = 0;
  spellCount = 0;
  productCount = 0;
  npcsCount = 0;
  trapsCount = 0;
  glossaryCount = 0;
  miniaturesCount = 0;
  mapsCount = 0;

  constructor(
    private readonly auth: Auth,
    readonly entities: EntitiesService,
  ) {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });

    this.load();
  }

  private async load() {
    await this.entities.ensureLoaded();
    this.itemsCount = this.entities.items.size();
    this.monsterCount = this.entities.monsters.size();
    this.spellCount = this.entities.spells.size();
    this.productCount = this.entities.products.size();
    this.npcsCount = this.entities.npcs.size();
    this.trapsCount = this.entities.traps.size();
    this.glossaryCount = this.entities.glossary.size();
    this.miniaturesCount = this.entities.miniatures.size();
    this.mapsCount = this.entities.maps.size();
  }
}
