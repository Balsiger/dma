import { signal } from '@angular/core';
import { EncounterFactService } from '../../services/fact/encounter.service';
import { EncounterEntity } from '../entities/encounter-entity';
import { Adventure } from '../facts/adventure';
import { Data, EncounterFact } from '../facts/encounter-fact';
import { Combined } from './combined';
import { NPC } from './npc';

export class Encounter extends Combined<EncounterEntity, Data, EncounterFactService, EncounterFact> {
  npcs = signal<NPC[]>([]);

  constructor(
    private readonly adventure: Adventure,
    entity: EncounterEntity,
    fact: EncounterFact,
  ) {
    super(entity, fact);

    this.init();
  }

  get id(): string {
    return this.fact.id();
  }

  private async init() {
    this.npcs.set(await Promise.all(this.entity.npcs.map(async (n) => this.adventure.campaign.getNpc(n.name))));
  }
}
