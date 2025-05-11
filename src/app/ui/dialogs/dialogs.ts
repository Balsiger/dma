import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Entity } from '../../data/entities/entity';
import { Item } from '../../data/entities/item';
import { Miniature } from '../../data/entities/miniature';
import { Monster } from '../../data/entities/monster';
import { NPC } from '../../data/entities/npc';
import { Product } from '../../data/entities/product';
import { Spell } from '../../data/entities/spell';
import { Token } from '../../data/entities/token';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
import { Condition } from '../../data/facts/condition';
import { Glossary } from '../../data/facts/glossary';
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

export type DialogType =
  | 'npc'
  | 'spell'
  | 'monster'
  | 'item'
  | 'condition'
  | 'glossary'
  | 'miniature'
  | 'product'
  | 'token';
export type EntityType = NPC | Spell | Monster | Item | Condition | Glossary | Miniature | Product | Token;
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
        this.dialog.open(SpellDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: spell });
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

      default:
        console.error('Unsupported type!', type);
    }
  }
}
