import { Injectable } from '@angular/core';
import { ConditionService } from './condition.service';
import { ItemService } from './item.service';
import { MiniaturesService } from './miniatures.service';
import { MonsterService } from './monster.service';
import { NpcService } from './npc.service';
import { ProductsService } from './products.service';
import { SpellService } from './spell.service';

@Injectable({ providedIn: 'root' })
export class EntityServices {
  constructor(
    readonly conditonService: ConditionService,
    readonly itemService: ItemService,
    readonly miniatureService: MiniaturesService,
    readonly monsterService: MonsterService,
    readonly npcService: NpcService,
    readonly productService: ProductsService,
    readonly spellService: SpellService,
  ) {}
}
