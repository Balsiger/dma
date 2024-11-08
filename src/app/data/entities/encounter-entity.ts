import { EncounterProto } from '../../proto/generated/template_pb';
import { Link } from '../values/link';
import { Entities } from './entities';
import { Entity } from './entity';
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
    readonly imageLinks: Link[],
    readonly npcs: NPC[],
    readonly monsters: Parametrized<Monster>[],
    readonly items: Parametrized<Item>[],
    readonly spells: Spell[],
  ) {
    super(common, product);
  }

  override resolve(bases: EncounterEntity[], values: Map<string, string>): EncounterEntity {
    // TODO(Merlin): Needs to be properly implements to base resolution.
    return this;
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
        true,
        `${proto.getCommon()?.getName() || ''} - ${proto.getTitle()}`,
      ),
      productName,
      proto.getTitle(),
      proto.getCommon()?.getName() || '',
      proto.getLocationsList(),
      proto.getSoundsList().map((s) => Link.fromProto(s)),
      proto.getNotesList(),
      proto.getImagesList().map((i) => Link.fromProto(i)),
      proto.getNpcsList().map((n) => npcs.get(n)),
      proto.getMonstersList().map((m) => Parametrized.fromProto(m, monsters.get(m.getName()), monsters)),
      proto.getItemsList().map((i) => Parametrized.fromProto(i, items.get(i.getName()), items)),
      proto.getSpellsList().map((s) => spells.get(s)),
    );
  }

  static create(name: string): EncounterEntity {
    return new EncounterEntity(Common.create(name), '', '', '', [], [], [], [], [], [], [], []);
  }
}
