import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ImmutablesService } from '../../../services/immutable/immutables.service';
import { UserService } from '../../../services/user.service';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';
import { AboutTextComponent } from '../about/about-text.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [PageComponent, SelectionTileComponent, AboutTextComponent],
})
export class TitleComponent {
  immutablesService = input.required<ImmutablesService>();
  itemsCount = computed(() => this.immutablesService().items.size());
  monsterCount = computed(() => this.immutablesService().monsters.size());
  spellCount = computed(() => this.immutablesService().spells.size());
  productCount = computed(() => this.immutablesService().products.size());
  npcsCount = computed(() => this.immutablesService().npcs.size());
  trapsCount = computed(() => this.immutablesService().traps.size());
  glossaryCount = computed(() => this.immutablesService().glossary.size());
  miniaturesCount = computed(() => this.immutablesService().miniatures.size());
  mapsCount = computed(() => this.immutablesService().maps.size());

  constructor(readonly userService: UserService) {}
}
