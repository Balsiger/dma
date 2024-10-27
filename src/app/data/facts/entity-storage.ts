import { Loading } from '../../common/loading';
import { ProtoRpc } from '../../net/ProtoRpc';
import { MonsterProto, NPCProto, ProductContentProto } from '../../proto/generated/template_pb';
import { ItemService } from '../../services/entity/item.service';
import { Entities } from '../entities/entities';
import { Monster } from '../entities/monster';
import { NPC } from '../entities/npc';

export class EntityStorage extends Loading {
  private readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);
  monsters: Entities<Monster> = new Entities(Monster.create);
  npcs: Entities<NPC> = new Entities(NPC.create);

  constructor(
    private readonly itemService: ItemService,
    private readonly paths: string[],
  ) {
    super();

    this.doLoad();
  }

  protected async doLoad() {
    const fetches = this.paths.map((p) => this.rpc.fetch(p));
    const protos = await Promise.all(fetches);

    let monsterProtos: MonsterProto[] = [];
    let npcProtos: NPCProto[] = [];

    for (const proto of protos) {
      monsterProtos = monsterProtos.concat(proto.getMonstersList());
      npcProtos = npcProtos.concat(proto.getNpcsList());
    }

    const monsters = await Promise.all(monsterProtos.map((m) => Monster.fromProto(this.itemService, m)));
    this.monsters.resolve(monsters);

    const npcs = await Promise.all(npcProtos.map((m) => NPC.fromProto(this.itemService, m)));
    this.npcs.resolve(npcs);

    // Need to add NPCs a second time to ensure that the race is properly resolved.
    // TODO: Check wether we can just update the entities instead of inserting them again.
    for (const npc of await this.npcs.getAll()) {
      this.npcs.insertEntity(await npc.resolveRace(this.monsters), true);
    }
  }
}
