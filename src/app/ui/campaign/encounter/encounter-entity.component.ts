import { Component, input } from '@angular/core';
import { Encounter } from '../../../data/combined/encounter';
import { EncounterEntity } from '../../../data/entities/encounter-entity';
import { Campaign } from '../../../data/facts/campaign';
import { EncounterFact } from '../../../data/facts/encounter-fact';
import { BadgeComponent } from '../../common/badge/badge.component';
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
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
    FormattedTextComponent,
  ],
  templateUrl: './encounter-entity.component.html',
  styleUrl: './encounter-entity.component.scss',
})
export class EncounterEntityComponent {
  encounterEntity = input<EncounterEntity>();
  encounter = input.required<Encounter>();
  campaign = input<Campaign>();
  state = input<EncounterFact>();
  showTitle = input(false);

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
