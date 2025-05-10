import { EncounterProto } from '../../proto/generated/template_pb';
import { Resolve } from '../resolve';
import { Link } from '../values/link';
import { Entities } from './entities';
import { Entity, EntityType } from './entity';
import { Item } from './item';
import { Monster } from './monster';
import { NPC } from './npc';
import { Parametrized } from './parametrized';
import { Spell } from './spell';
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
    productName: string,
    productId: string,
    npcs: Entities<NPC>,
    monsters: Entities<Monster>,
    items: Entities<Item>,
    spells: Entities<Spell>,
  ): EncounterEntity {
    return new EncounterEntity(
      Common.fromProto(
        proto.getCommon(),
        productName,
        productId,
        EntityType.encounter,
        true,
        `${proto.getCommon()?.getName() || ''} - ${proto.getTitle()}`,
      ),
      productName,
      proto.getTitle(),
      proto.getCommon()?.getName() || '',
      proto.getLocationsList(),
      proto.getSoundsList().map((s) => Link.fromProto(s, EntityType.encounter)),
      proto.getNotesList(),
      proto.getNpcsList().map((n) => npcs.get(n)),
      proto.getMonstersList().map((m) => Parametrized.fromProto(m, monsters.get(m.getName()), monsters)),
      proto.getItemsList().map((i) => Parametrized.fromProto(i, items.get(i.getName()), items)),
      proto.getSpellsList().map((s) => spells.get(s)),
    );
  }

  static create(name: string): EncounterEntity {
    return new EncounterEntity(Common.create(name, EntityType.encounter), '', '', '', [], [], [], [], [], [], []);
  }
}
