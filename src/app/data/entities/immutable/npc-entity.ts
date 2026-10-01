import { MonsterProto, NPCProto } from '../../../proto/generated/template_pb';
import { Immutable } from './immutable';
import { ImmutableType } from './Immutable-type';
import { Immutables } from './immutables';
import { Item } from './item';
import { ImmutableMonster } from './monster';
import { ProductContent } from './product-content';
import { Common } from './values/common';
import { Gender } from './values/enums/gender';

export class NPCEntity extends Immutable<NPCEntity> {
  constructor(
    common: Common,
    product: string,
    readonly gender: Gender,
    readonly genderSpecial: string,
    readonly race: ImmutableMonster,
    readonly factions: string[],
  ) {
    super(common, product);
  }

  resolve(bases: NPCEntity[], values: Map<string, string>): NPCEntity {
    return this;
  }

  async resolveRace(monsters: Immutables<ImmutableMonster>): Promise<NPCEntity> {
    const baseMonsters = this.race.common.bases.map((n) => monsters.get(n));
    const race = this.race.resolve(baseMonsters, new Map<string, string>());

    return new NPCEntity(this.common, this.product, this.gender, this.genderSpecial, race, this.factions);
  }

  static create(name: string): NPCEntity {
    return new NPCEntity(
      Common.create(name, ImmutableType.npc),
      '',
      Gender.UNKNOWN,
      '',
      ImmutableMonster.create(''),
      [],
    );
  }

  static async fromProto(items: Immutables<Item>, proto: NPCProto, productContent: ProductContent): Promise<NPCEntity> {
    return new NPCEntity(
      Common.fromProto(proto.getCommon(), productContent, ImmutableType.npc, true),
      productContent.name,
      Gender.fromProto(proto.getGender()),
      proto.getGenderSpecial(),
      await ImmutableMonster.fromProto(items, proto.getRace() || new MonsterProto(), productContent),
      proto.getFactionsList(),
    );
  }
}
