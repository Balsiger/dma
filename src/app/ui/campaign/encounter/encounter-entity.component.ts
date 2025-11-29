import { Component, input } from '@angular/core';
import { EncounterEntity } from '../../../data/entities/encounter-entity';
import { Campaign } from '../../../data/facts/campaign';
import { Encounter } from '../../../data/facts/encounter';
import { BadgeComponent } from '../../common/badge/badge.component';
import { LinkComponent } from '../../common/link/link.component';
import { ItemComponent } from '../../item/item.component';
import { MonsterComponent } from '../../monster/monster.component';
import { NPCComponent } from '../../npc/npc.component';
import { SpellComponent } from '../../spell/spell.component';
import { TrapComponent } from '../../trap/trap.component';
import { ScreenImageButtonComponent } from '../screen/screen-image-button.component';

@Component({
  selector: 'encounter-entity',
  imports: [
    LinkComponent,
    ScreenImageButtonComponent,
    NPCComponent,
    MonsterComponent,
    ItemComponent,
    SpellComponent,
    BadgeComponent,
    TrapComponent,
  ],
  templateUrl: './encounter-entity.component.html',
  styleUrl: './encounter-entity.component.scss',
})
export class EncounterEntityComponent {
  encounter = input<EncounterEntity>();
  campaign = input<Campaign>();
  state = input<Encounter>();

  readonly expandedSpells = new Set<string>();
  readonly expandedTraps = new Set<string>();
  readonly expandedItems = new Set<string>();
  readonly expandedMonsters = new Set<string>();
  readonly expandedNPCs = new Set<string>();

  async onStartEncounter() {
    this.state()?.start();
  }

  async onFinishEncounter() {
    this.state()?.finish();
  }
}
