import { Injectable } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { Entity } from "../../data/entities/entity"
import { Miniature } from "../../data/entities/miniature"
import { Monster } from "../../data/entities/monster"
import { NPC } from "../../data/entities/npc"
import { Spell } from "../../data/spell"
import { Campaign } from "../../data/things/campaign"
import { Condition } from "../../data/things/condition"
import { Item } from "../../data/things/item"
import { ConditionService } from "../../services/condition.service"
import { ItemService } from "../../services/item.service"
import { MiniaturesService } from "../../services/miniatures.service"
import { MonsterService } from "../../services/monster.service"
import { NpcService } from "../../services/npc.service"
import { SpellService } from "../../services/spell.service"
import { NPCDialogComponent } from "../campaign/npc-dialog/npc-dialog.component"
import { MiniatureDialogComponent } from "../dialogs/miniature-dialog/miniature-dialog.component"
import { ConditionDialogComponent } from "../pages/campaign/condition-dialog/condition-dialog.component"
import { ItemDialogComponent } from "../pages/campaign/item-dialog/item-dialog.component"
import { MonsterDialogComponent } from "../pages/campaign/monster-dialog/monster-dialog.component"
import { SpellDialogComponent } from "../pages/campaign/spell-dialog/spell-dialog.component"

export type DialogType = 'npc' | 'spell' | 'monster' | 'item' | 'condition' | 'miniature';
export type EntityType = NPC | Spell | Monster | Item | Condition | Miniature;
export type DialogComponent = NPCDialogComponent | SpellDialogComponent | MonsterDialogComponent | ItemDialogComponent | ConditionDialogComponent;
 
@Injectable({ providedIn: 'root' })
export class Dialogs {

  constructor(private readonly dialog: MatDialog,
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService,
    private readonly itemService: ItemService,
    private readonly npcService: NpcService,
    private readonly conditionService: ConditionService,
    private readonly miniatureService: MiniaturesService) {}

  async open<T extends Entity<T>>(type: DialogType, name: string, entity?: T, campaign?: Campaign) {
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
          data: { miniature: miniature, campaign: campaign }, 
        })
        break;
    }
  }
}