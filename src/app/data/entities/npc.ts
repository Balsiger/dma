import { MonsterProto, NPCProto } from '../../proto/generated/template_pb';
import { ItemService } from '../../services/entity/item.service';
import { MonsterService } from '../../services/entity/monster.service';
import { Entity } from './entity';
import { Monster } from './monster';
import { Common } from './values/common';
import { Gender } from './values/enums/gender';
import { EMPTY as REFERENCES_EMPTY } from './values/references';

export class NPC extends Entity<NPC> {
  constructor(
    common: Common,
    readonly gender: Gender,
    readonly genderSpecial: string,
    readonly race: Monster,
    readonly factions: string[],
  ) {
    super(common);
  }

  resolve(bases: NPC[], values: Map<string, string>): NPC {
    return this;
  }

  async resolveRace(monsterService: MonsterService): Promise<NPC> {
    const monsters = await Promise.all(this.race.common.bases.map((n) => monsterService.get(n)));
    const race = this.race.resolve(monsters, new Map<string, string>());

    return new NPC(this.common, this.gender, this.genderSpecial, race, this.factions);
  }

  static create(name: string): NPC {
    return new NPC(
      new Common(name, name + 's', [], [], '', '', [], REFERENCES_EMPTY, []),
      Gender.UNKNOWN,
      '',
      Monster.create(''),
      [],
    );
  }

  static async fromProto(itemService: ItemService, proto: NPCProto): Promise<NPC> {
    return new NPC(
      Common.fromProto(proto.getCommon(), true),
      Gender.fromProto(proto.getGender()),
      proto.getGenderSpecial(),
      await Monster.fromProto(itemService, proto.getRace() || new MonsterProto()),
      proto.getFactionsList(),
    );
  }
}

export enum NPCState {
  alive = 'alive',
  dead = 'dead',
}

export interface Data {
  state: string;
  miniature: string;
}

export class CampaignNPC {
  constructor(
    readonly name: string,
    readonly state: NPCState,
    readonly miniature: string,
  ) {}

  static fromData(name: string, data: Data) {
    return new CampaignNPC(name, NPCState[data.state as keyof typeof NPCState], data.miniature);
  }

  toData(): Data {
    return {
      state: this.state,
      miniature: this.miniature,
    };
  }
}
