import { Injectable } from '@angular/core';
import { NPC } from '../../data/entities/npc';
import { ProtoRpc } from '../../net/ProtoRpc';
import { NPCsProto } from '../../proto/generated/template_pb';
import { EntityService } from './entity.service';
import { ItemService } from './item.service';
import { MonsterService } from './monster.service';

@Injectable({
  providedIn: 'root',
})
export class NpcService extends EntityService<NPC, NPCsProto> {
  constructor(
    itemService: ItemService,
    private readonly monsterService: MonsterService,
  ) {
    super('/assets/data/npcs.pb', NPC.create, new ProtoRpc(NPCsProto.deserializeBinary), undefined, (p) =>
      p.getNpcsList().map((n) => NPC.fromProto(itemService, n)),
    );
  }

  protected override async doLoad() {
    await super.doLoad();

    // Need to add NPCs a second time to ensure that the race is properly resolved.
    // TODO: Check wether we can just update the entities instead of inserting them again.
    for (const name of this.entitiesByRealName.keys()) {
      this.insertEntity(await this.entitiesByRealName.get(name)!.resolveRace(this.monsterService), true);
    }
  }
}
