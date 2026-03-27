import { MonsterProto, NPCProto } from '../../proto/generated/template_pb';
import { Entities } from './entities';
import { Entity, EntityType } from './entity';
import { Item } from './item';
import { Monster } from './monster';
import { ProductContent } from './product-content';
import { Common } from './values/common';
import { Gender } from './values/enums/gender';

export class NPCEntity extends Entity<NPCEntity> {
  constructor(
    common: Common,
    product: string,
    readonly gender: Gender,
    readonly genderSpecial: string,
    readonly race: Monster,
    readonly factions: string[],
  ) {
    super(common, product);
  }

  resolve(bases: NPCEntity[], values: Map<string, string>): NPCEntity {
    return this;
  }

  async resolveRace(monsters: Entities<Monster>): Promise<NPCEntity> {
    const baseMonsters = this.race.common.bases.map((n) => monsters.get(n));
    const race = this.race.resolve(baseMonsters, new Map<string, string>());

    return new NPCEntity(this.common, this.product, this.gender, this.genderSpecial, race, this.factions);
  }

  static create(name: string): NPCEntity {
    return new NPCEntity(Common.create(name, EntityType.npc), '', Gender.UNKNOWN, '', Monster.create(''), []);
  }

  static async fromProto(items: Entities<Item>, proto: NPCProto, productContent: ProductContent): Promise<NPCEntity> {
    return new NPCEntity(
      Common.fromProto(proto.getCommon(), productContent, EntityType.npc, true),
      productContent.name,
      Gender.fromProto(proto.getGender()),
      proto.getGenderSpecial(),
      await Monster.fromProto(items, proto.getRace() || new MonsterProto(), productContent),
      proto.getFactionsList(),
    );
  }
}
