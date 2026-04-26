import { computed, signal } from '@angular/core';
import { EntitiesService } from '../../services/entity/entities.service';
import { EncounterFactService } from '../../services/fact/encounter.service';
import { EncounterEntity } from '../entities/encounter-entity';
import { Adventure } from '../facts/adventure';
import { Data, EncounterFact } from '../facts/encounter-fact';
import { Creature } from '../local/creature';
import { Combined } from './combined';
import { NPC } from './npc';

export class Encounter extends Combined<EncounterEntity, Data, EncounterFactService, EncounterFact> {
  npcs = signal<NPC[]>([]);

  notes = this.fact.notes;
  isFinished = this.fact.isFinished.bind(this.fact);
  isStarted = this.fact.isStarted.bind(this.fact);
  start = this.fact.start.bind(this.fact);
  finish = this.fact.finish.bind(this.fact);
  reset = this.fact.reset.bind(this.fact);
  locations = this.fact.locations.bind(this.fact);
  miniatures = this.fact.miniatures.bind(this.fact);
  setMiniatures = this.fact.setMiniatureSelections.bind(this.fact);
  id = this.fact.id.bind(this.fact.id);
  service = this.fact.encounterService;

  shortName = this.entity.shortName;
  soundLinks = this.entity.soundLinks;
  monsters = this.entity.monsters;
  items = this.entity.items;
  spells = this.entity.spells;
  traps = this.entity.traps;

  campaign = this.fact.adventure.campaign;

  creatures = computed(() => {
    return [
      ...(this?.campaign?.characters()?.map((m) => Creature.fromCharacter(this.name ?? '', m)) ?? []),
      ...(this?.npcs()?.map((n) => Creature.fromNPC(this.name, n)) ?? []),
      ...(this.monsters?.flatMap((m) => Creature.fromParametrizedMonster(this.name, m)) ?? []),
    ];
  });

  constructor(
    private readonly adventure: Adventure | undefined,
    entity: EncounterEntity,
    fact: EncounterFact,
  ) {
    super(entity, fact, fact.adventure.encounterFactService);

    this.init();
  }

  private async init() {
    const adventure = this.adventure;
    if (adventure) {
      this.npcs.set(await Promise.all(this.entity.npcs.map(async (n) => adventure.campaign.getNpc(n.name))));
    } else {
      this.npcs.set(this.entity.npcs.map((n) => NPC.fromEntityOnly(n)));
    }
  }

  static fromEntityOnly(entity: EncounterEntity) {
    return new Encounter(
      undefined,
      entity,
      new EncounterFact({} as any as EncounterFactService, {} as any as EntitiesService, {} as any as Adventure, {}),
    );
  }
}
