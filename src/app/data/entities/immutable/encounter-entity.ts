import { EncounterProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';
import { Link } from '../../values/link';
import { Immutable } from './immutable';
import { ImmutableType } from './Immutable-type';
import { Immutables } from './immutables';
import { Item } from './item';
import { ImmutableMonster } from './monster';
import { NPCEntity } from './npc-entity';
import { Parametrized } from './parametrized';
import { ProductContent } from './product-content';
import { Spell } from './spell';
import { Trap } from './trap';
import { Common } from './values/common';

export class ImmutableEncounter extends Immutable<ImmutableEncounter> {
  constructor(
    common: Common,
    product: string,
    readonly title: string,
    readonly shortName: string,
    readonly locations: string[],
    readonly linked: string[],
    readonly soundLinks: Link[],
    readonly notesRoom: string[],
    readonly notesDoor: string[],
    readonly notes: string[],
    readonly npcs: NPCEntity[],
    readonly monsters: Parametrized<ImmutableMonster>[],
    readonly items: Parametrized<Item>[],
    readonly spells: Spell[],
    readonly traps: Trap[],
  ) {
    super(common, product);
  }

  override resolve(bases: ImmutableEncounter[], values: Map<string, string>): ImmutableEncounter {
    if (bases.length === 0) {
      return this;
    }

    return new ImmutableEncounter(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
        true,
      ),
      this.product,
      this.title,
      this.shortName,
      Resolve.stack(
        this.locations,
        bases.map((e) => e.locations),
      ),
      this.linked,
      Resolve.dedupeByKey(
        this.soundLinks,
        bases.map((e) => e.soundLinks),
        (e) => e.label,
      ),
      [...this.notesRoom, ...bases.flatMap((e) => e.notesRoom)],
      [...this.notesDoor, ...bases.flatMap((e) => e.notesDoor)],
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
    npcs: Immutables<NPCEntity>,
    monsters: Immutables<ImmutableMonster>,
    items: Immutables<Item>,
    spells: Immutables<Spell>,
    traps: Immutables<Trap>,
  ): ImmutableEncounter {
    const common = Common.fromProto(
      proto.getCommon(),
      productContent,
      ImmutableType.encounter,
      true,
      `${proto.getCommon()?.getName() || ''} - ${proto.getTitle()}`,
    );
    return new ImmutableEncounter(
      common,
      productContent.name,
      proto.getTitle(),
      proto.getCommon()?.getName() || '',
      proto.getLocationsList(),
      proto.getLinkedList(),
      proto
        .getSoundsList()
        .map((s) => Link.fromProto(s, ImmutableType.encounter, productContent.abbreviation, common.version)),
      proto.getNotesRoomList(),
      proto.getNotesDoorList(),
      proto.getNotesList(),
      proto.getNpcsList().map((n) => npcs.get(n)),
      proto.getMonstersList().map((m) => Parametrized.fromProto(m, monsters.get(m.getName()), monsters)),
      proto.getItemsList().map((i) => Parametrized.fromProto(i, items.get(i.getName()), items)),
      proto.getSpellsList().map((s) => spells.get(s)),
      proto.getTrapsList().map((t) => traps.get(t)),
    );
  }

  static create(name: string): ImmutableEncounter {
    return new ImmutableEncounter(
      Common.create(name, ImmutableType.encounter),
      '',
      '',
      '',
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    );
  }
}
