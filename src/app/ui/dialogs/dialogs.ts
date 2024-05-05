import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Entity } from '../../data/entities/entity';
import { Item } from '../../data/entities/item';
import { Miniature } from '../../data/entities/miniature';
import { Monster } from '../../data/entities/monster';
import { NPC } from '../../data/entities/npc';
import { Product } from '../../data/entities/product';
import { Spell } from '../../data/entities/spell';
import { Campaign } from '../../data/facts/campaign';
import { Condition } from '../../data/facts/condition';
import { ConditionService } from '../../services/entity/condition.service';
import { ItemService } from '../../services/entity/item.service';
import { MiniaturesService } from '../../services/entity/miniatures.service';
import { MonsterService } from '../../services/entity/monster.service';
import { NpcService } from '../../services/entity/npc.service';
import { ProductsService } from '../../services/entity/products.service';
import { SpellService } from '../../services/entity/spell.service';
import { ConditionDialogComponent } from '../condition/condition-dialog.component';
import { ItemDialogComponent } from '../item/item-dialog.component';
import { MiniatureDialogComponent } from '../miniatures/miniature-dialog.component';
import { MonsterDialogComponent } from '../monster/monster-dialog.component';
import { NPCDialogComponent } from '../npc/npc-dialog.component';
import { ProductDialogComponent } from '../product/product-dialog.component';
import { SpellDialogComponent } from '../spell/spell-dialog.component';
import { Token } from '../../data/entities/token';

export type DialogType = 'npc' | 'spell' | 'monster' | 'item' | 'condition' | 'miniature' | 'product' | 'token';
export type EntityType = NPC | Spell | Monster | Item | Condition | Miniature | Product | Token;
export type DialogComponent =
  | NPCDialogComponent
  | SpellDialogComponent
  | MonsterDialogComponent
  | ItemDialogComponent
  | ConditionDialogComponent
  | ProductDialogComponent;

@Injectable({ providedIn: 'root' })
export class Dialogs {
  constructor(
    private readonly dialog: MatDialog,
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService,
    private readonly itemService: ItemService,
    private readonly npcService: NpcService,
    private readonly conditionService: ConditionService,
    private readonly miniatureService: MiniaturesService,
    private readonly productService: ProductsService,
  ) {}

  async open<T extends Entity<T>>(
    type: DialogType,
    name: string,
    entity?: T,
    campaign?: Campaign,
    selector?: (entity: T) => void,
  ) {
    switch (type) {
      case 'spell':
        const spell = entity || (await this.spellService.get(name));
        this.dialog.open(SpellDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: spell });
        break;

      case 'monster':
        const monster = entity || (await this.monsterService.get(name));
        this.dialog.open(MonsterDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { monster: monster, campaign: campaign },
        });
        break;

      case 'npc':
        const npc = entity || (await this.npcService.get(name));
        this.dialog.open(NPCDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { npc: npc, campaign: campaign },
        });
        break;

      case 'item':
        const item = entity || (await this.itemService.get(name));
        this.dialog.open(ItemDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { item: item, campaign: campaign },
        });
        break;

      case 'condition':
        const condition = entity || (await this.conditionService.get(name));
        this.dialog.open(ConditionDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { condition: condition, campaign: campaign },
        });
        break;

      case 'miniature':
        const miniature = entity || (await this.miniatureService.get(name));
        this.dialog.open(MiniatureDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { miniature: miniature, campaign: campaign, selector: selector },
        });
        break;

      case 'product':
        const product = entity || (await this.productService.get(name));
        this.dialog.open(ProductDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { product: product },
        });
        break;
    }
  }
}
