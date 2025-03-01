import { signal } from '@angular/core';
import { MonsterProto, NPCProto } from '../../proto/generated/template_pb';
import { CampaignNpcService } from '../../services/fact/campaignNpc.service';
import { Campaign } from '../facts/campaign';
import { Fact } from '../facts/fact';
import { Entities } from './entities';
import { Entity, EntityType } from './entity';
import { Item } from './item';
import { Monster } from './monster';
import { Common } from './values/common';
import { Gender } from './values/enums/gender';
import { Version } from './values/enums/version';
import { EMPTY as REFERENCES_EMPTY } from './values/reference';

export class NPC extends Entity<NPC> {
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

  resolve(bases: NPC[], values: Map<string, string>): NPC {
    return this;
  }

  async resolveRace(monsters: Entities<Monster>): Promise<NPC> {
    const baseMonsters = this.race.common.bases.map((n) => monsters.get(n));
    const race = this.race.resolve(baseMonsters, new Map<string, string>());

    return new NPC(this.common, this.product, this.gender, this.genderSpecial, race, this.factions);
  }

  static create(name: string): NPC {
    return new NPC(
      new Common(name, name + 's', [], [], '', '', [], REFERENCES_EMPTY, [], EntityType.npc, Version.DND_5_24),
      '',
      Gender.UNKNOWN,
      '',
      Monster.create(''),
      [],
    );
  }

  static async fromProto(items: Entities<Item>, proto: NPCProto, productName: string, productId: string): Promise<NPC> {
    return new NPC(
      Common.fromProto(proto.getCommon(), productName, productId, EntityType.npc, true),
      productName,
      Gender.fromProto(proto.getGender()),
      proto.getGenderSpecial(),
      await Monster.fromProto(items, proto.getRace() || new MonsterProto(), productName, productId),
      proto.getFactionsList(),
    );
  }
}

export enum NPCState {
  unknown = 'unknown',
  alive = 'alive',
  dead = 'dead',
}

export interface Data {
  state?: string;
  miniature?: string;
}

export class CampaignNPC extends Fact<Data, CampaignNpcService> {
  state = signal<NPCState>(NPCState.unknown);
  miniature = signal('');

  constructor(
    service: CampaignNpcService,
    readonly campaign: Campaign,
    readonly name: string,
    data: Data,
  ) {
    super(service);

    // Cannot update signals in the same cycle as they are created :-(.
    setTimeout(() => {
      this.update(data);
    });
  }

  override update(data: Data): void {
    if (data.state || data.miniature) {
      this.state.set(NPCState[data.state as keyof typeof NPCState]);
      this.miniature.set(data.miniature || '');
    }
  }

  override buildDocumentId(): string {
    return this.name;
  }

  static fromData(campaign: Campaign, service: CampaignNpcService, name: string, data: Data) {
    return new CampaignNPC(service, campaign, name, {
      state: NPCState[data.state as keyof typeof NPCState],
      miniature: data.miniature,
    });
  }

  toData(): Data {
    return {
      state: this.state(),
      miniature: this.miniature(),
    };
  }
}
