import { Injectable } from '@angular/core';
import { ItemService } from './item.service';
import { MiniaturesService } from './miniatures.service';
import { MonsterService } from './monster.service';
import { ProductsService } from './products.service';
import { SpellService } from './spell.service';
import { TokensService } from './tokens.service';

@Injectable({ providedIn: 'root' })
export class EntityServices {
  constructor(
    readonly itemService: ItemService,
    readonly miniatureService: MiniaturesService,
    readonly monsterService: MonsterService,
    readonly productService: ProductsService,
    readonly spellService: SpellService,
    readonly tokenService: TokensService,
  ) {}
}
