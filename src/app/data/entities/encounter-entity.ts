import { EncounterProto } from '../../proto/generated/template_pb';
import { Resolve } from '../resolve';
import { Link } from '../values/link';
import { Entities } from './entities';
import { Entity, EntityType } from './entity';
import { Item } from './item';
import { Monster } from './monster';
import { NPC } from './npc';
import { Parametrized } from './parametrized';
import { ProductContent } from './product-content';
import { Spell } from './spell';
import { Trap } from './trap';
import { Common } from './values/common';

// TODO(Merlin): Rename this to Encounter, after renaming current Encounter to something like CampaignEncounder (or a better name).
export class EncounterEntity extends Entity<EncounterEntity> {
  constructor(
    common: Common,
    product: string,
    readonly title: string,
    readonly shortName: string,
    readonly locations: string[],
    readonly soundLinks: Link[],
    readonly notes: string[],
    readonly npcs: NPC[],
    readonly monsters: Parametrized<Monster>[],
    readonly items: Parametrized<Item>[],
    readonly spells: Spell[],
    readonly traps: Trap[],
  ) {
    super(common, product);
  }

  override resolve(bases: EncounterEntity[], values: Map<string, string>): EncounterEntity {
    if (bases.length === 0) {
      return this;
    }

    return new EncounterEntity(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
        true,
      ),
      this.product,
      this.title,
      this.shortName,
      Resolve.dedupe(
        this.locations,
        bases.map((e) => e.locations),
      ),
      Resolve.dedupeByKey(
        this.soundLinks,
        bases.map((e) => e.soundLinks),
        (e) => e.label,
      ),
      [...this.notes, ...bases.flatMap((e) => e.notes)],
      [...this.npcs, ...bases.flatMap((e) => e.npcs)],
      [...this.monsters, ...bases.flatMap((e) => e.monsters)],
      [...this.items, ...bases.flatMap((e) => e.items)],
      [...this.spells, ...bases.flatMap((e) => e.spells)],
      [...this.traps, ...bases.flatMap((e) => e.traps)],
    );
  }

  override computeAutocompleteOptions(value: string): string[] {
    if (value === 'Locations') {
      return this.locations;
    }

    return super.computeAutocompleteOptions(value);
  }

  static fromProto(
    proto: EncounterProto,
    productContent: ProductContent,
    npcs: Entities<NPC>,
    monsters: Entities<Monster>,
    items: Entities<Item>,
    spells: Entities<Spell>,
    traps: Entities<Trap>,
  ): EncounterEntity {
    const common = Common.fromProto(
      proto.getCommon(),
      productContent,
      EntityType.encounter,
      true,
      `${proto.getCommon()?.getName() || ''} - ${proto.getTitle()}`,
    );
    return new EncounterEntity(
      common,
      productContent.name,
      proto.getTitle(),
      proto.getCommon()?.getName() || '',
      proto.getLocationsList(),
      proto
        .getSoundsList()
        .map((s) => Link.fromProto(s, EntityType.encounter, productContent.abbreviation, common.version)),
      proto.getNotesList(),
      proto.getNpcsList().map((n) => npcs.get(n)),
      proto.getMonstersList().map((m) => Parametrized.fromProto(m, monsters.get(m.getName()), monsters)),
      proto.getItemsList().map((i) => Parametrized.fromProto(i, items.get(i.getName()), items)),
      proto.getSpellsList().map((s) => spells.get(s)),
      proto.getTrapsList().map((t) => traps.get(t)),
    );
  }

  static create(name: string): EncounterEntity {
    return new EncounterEntity(Common.create(name, EntityType.encounter), '', '', '', [], [], [], [], [], [], [], []);
  }
}
