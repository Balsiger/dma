import { computed, signal } from '@angular/core';
import { EncounterFactService } from '../../../services/fact/encounter.service';
import { ImmutablesService } from '../../../services/immutable/entities.service';
import { Adventure } from '../fluid/adventure';
import { Data, EncounterFact } from '../fluid/encounter-fact';
import { EncounterEntity } from '../immutable/encounter-entity';
import { Creature } from '../local/creature';
import { NPC } from './npc';
import { Synced } from './synced';

export class Encounter extends Synced<EncounterEntity, Data, EncounterFactService, EncounterFact> {
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
  guru = this.immutable.common.name;

  campaign = this.fluid.adventure.campaign;

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
      this.npcs.set(await Promise.all(this.immutable.npcs.map(async (n) => adventure.campaign.getNpc(n.name))));
    } else {
      this.npcs.set(this.immutable.npcs.map((n) => NPC.fromEntityOnly(n)));
    }
  }

  static fromEntityOnly(entity: EncounterEntity) {
    return new Encounter(
      undefined,
      entity,
      new EncounterFact({} as any as EncounterFactService, {} as any as ImmutablesService, {} as any as Adventure, {}),
    );
  }
}
