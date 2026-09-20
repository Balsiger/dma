import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Condition } from '../../data/entities/fluid/condition';
import { Glossary } from '../../data/entities/fluid/glossary';
import { Entity } from '../../data/entities/static/entity';
import { Item } from '../../data/entities/static/item';
import { Miniature } from '../../data/entities/static/miniature';
import { Monster } from '../../data/entities/static/monster';
import { NPCEntity } from '../../data/entities/static/npc-entity';
import { Product } from '../../data/entities/static/product';
import { Spell } from '../../data/entities/static/spell';
import { Token } from '../../data/entities/static/token';
import { Trap } from '../../data/entities/static/trap';
import { Version } from '../../data/entities/static/values/enums/version';
import { EntitiesService } from '../../services/entity/entities.service';
import { MiniaturesService } from '../../services/entity/miniatures.service';
import { ConditionDialogComponent } from '../condition/condition-dialog.component';
import { GlossaryDialogComponent } from '../glossary/glossary-dialog.component';
import { ItemDialogComponent } from '../item/item-dialog.component';
import { MiniatureDialogComponent } from '../miniatures/miniature-dialog.component';
import { MonsterDialogComponent } from '../monster/monster-dialog.component';
import { NPCDialogComponent } from '../npc/npc-dialog.component';
import { ProductDialogComponent } from '../product/product-dialog.component';
import { SpellDialogComponent } from '../spell/spell-dialog.component';
import { TrapDialogComponent } from '../trap/trap-dialog.component';

export type DialogType =
  | 'npc'
  | 'spell'
  | 'monster'
  | 'item'
  | 'condition'
  | 'glossary'
  | 'miniature'
  | 'product'
  | 'token'
  | 'trap';
export type EntityType = NPCEntity | Spell | Monster | Item | Condition | Glossary | Trap | Miniature | Product | Token;
export type DialogComponent =
  | NPCDialogComponent
  | SpellDialogComponent
  | MonsterDialogComponent
  | ItemDialogComponent
  | ConditionDialogComponent
  | ProductDialogComponent
  | TrapDialogComponent;

@Injectable({ providedIn: 'root' })
export class Dialogs {
  constructor(
    private readonly dialog: MatDialog,
    private readonly entitiesService: EntitiesService,
    private readonly miniatureService: MiniaturesService,
  ) {}

  async open<T extends Entity<T>>(
    type: DialogType,
    name: string,
    entity?: T,
    campaign?: Campaign,
    selector?: (entity: T) => void,
    version?: Version,
  ) {
    switch (type) {
      case 'spell':
        const spell = entity || this.entitiesService.spells.get(name, version);
        this.dialog.open(SpellDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: { spell, campaign } });
        break;

      case 'monster':
        const monster = entity || this.entitiesService.monsters.get(name, version);
        this.dialog.open(MonsterDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { monster: monster, campaign: campaign },
        });
        break;

      case 'npc':
        const npc = entity || this.entitiesService.npcs.get(name, version);
        this.dialog.open(NPCDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { npc: npc, campaign: campaign },
        });
        break;

      case 'item':
        const item = entity || this.entitiesService.items.get(name, version);
        this.dialog.open(ItemDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { item: item, campaign: campaign },
        });
        break;

      case 'condition':
        const condition = entity || this.entitiesService.conditions.get(name, version);
        this.dialog.open(ConditionDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { condition: condition, campaign: campaign },
        });
        break;

      case 'glossary':
        const glossary = entity || this.entitiesService.glossary.get(name, version);
        this.dialog.open(GlossaryDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { glossary: glossary, campaign: campaign },
        });
        break;

      case 'miniature':
        const miniature = entity || this.entitiesService.miniatures.get(name);
        this.dialog.open(MiniatureDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { miniature: miniature, campaign: campaign, selector: selector },
        });
        break;

      case 'product':
        const product = entity || this.entitiesService.products.get(name);
        this.dialog.open(ProductDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { product: product },
        });
        break;

      case 'trap':
        const trap = entity || this.entitiesService.traps.get(name);
        this.dialog.open(TrapDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { trap: trap },
        });
        break;

      default:
        console.error('Unsupported type!', type);
    }
  }
}
