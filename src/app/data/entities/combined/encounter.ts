import { computed, signal } from '@angular/core';
import { EncounterFactService } from '../../../services/fluid/encounter.service';
import { ImmutablesService } from '../../../services/immutable/entities.service';
import { LocalMonsterService } from '../../../services/local/monster.service';
import { Adventure } from '../fluid/adventure';
import { Data, EncounterFact } from '../fluid/encounter-fact';
import { ImmutableEncounter } from '../immutable/encounter-entity';
import { LocalData, NoLocal } from '../local/local';
import { LocalMonster } from '../local/monster';
import { Combined } from './combined';
import { Monster } from './monster';
import { NPC } from './npc';

export class Encounter extends Combined<
  ImmutableEncounter,
  EncounterFact,
  Data,
  EncounterFactService,
  LocalData,
  NoLocal
> {
  npcs = signal<NPC[]>([]);

  isFinished = this.fluid.isFinished.bind(this.fluid);
  isStarted = this.fluid.isStarted.bind(this.fluid);
  start = this.fluid.start.bind(this.fluid);
  finish = this.fluid.finish.bind(this.fluid);
  reset = this.fluid.reset.bind(this.fluid);
  locations = this.fluid.locations.bind(this.fluid);
  miniatures = this.fluid.miniatures.bind(this.fluid);
  setMiniatures = this.fluid.setMiniatureSelections.bind(this.fluid);
  id = this.fluid.id.bind(this.fluid.id);
  service = this.fluid.encounterService;

  linked = this.immutable.linked;
  notesRoom = this.immutable.notesRoom;
  notesDoor = this.immutable.notesDoor;
  notes = this.immutable.notes;
  shortName = this.immutable.shortName;
  soundLinks = this.immutable.soundLinks;
  monsters = this.immutable.monsters;
  items = this.immutable.items;
  spells = this.immutable.spells;
  traps = this.immutable.traps;

  campaign = this.fluid.adventure.campaign;
  context = `${this.campaign?.name}/${this.name}`;
  monsterService = new LocalMonsterService(
    this.context,
    (name: string, id: string) => new LocalMonster(name, id, this.context),
  );
  realMonsters = this.monsters?.flatMap((m) => Monster.fetchParametrized(this.monsterService, m)) ?? [];

  creatures = computed(() => {
    return [...this.campaign.characters(), ...this.npcs(), ...this.realMonsters];
  });

  constructor(
    private readonly adventure: Adventure | undefined,
    entity: ImmutableEncounter,
    fact: EncounterFact,
  ) {
    super(entity, fact, fact.adventure.encounterFactService, new NoLocal());

    this.init();
  }

  private async init() {
    const adventure = this.adventure;
    if (adventure) {
      this.npcs.set(await Promise.all(this.immutable.npcs.map(async (n) => adventure.campaign.getNpc(n.name))));
    } else {
      this.npcs.set(this.immutable.npcs.map((n) => NPC.fromImmutableOnly(n)));
    }
  }

  static fromEntityOnly(entity: ImmutableEncounter) {
    return new Encounter(
      undefined,
      entity,
      new EncounterFact({} as any as EncounterFactService, {} as any as ImmutablesService, {} as any as Adventure, {}),
    );
  }
}
