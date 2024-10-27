import { Loading } from '../../common/loading';
import { ProtoRpc } from '../../net/ProtoRpc';
import { ConditionProto, MonsterProto, NPCProto, ProductContentProto } from '../../proto/generated/template_pb';
import { ItemService } from '../../services/entity/item.service';
import { Entities } from '../entities/entities';
import { Monster } from '../entities/monster';
import { NPC } from '../entities/npc';
import { Condition } from './condition';

export class EntityStorage extends Loading {
  private readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);
  monsters: Entities<Monster> = new Entities(Monster.create);
  npcs: Entities<NPC> = new Entities(NPC.create);
  conditions: Entities<Condition> = new Entities(Condition.create);

  constructor(
    private readonly itemService: ItemService,
    private readonly paths: string[],
  ) {
    super();

    this.load();
  }

  protected async doLoad() {
    const fetches = this.paths.map((p) => this.rpc.fetch(p));
    const protos = await Promise.all(fetches);

    let monsterProtos: MonsterProto[] = [];
    let npcProtos: NPCProto[] = [];
    let conditionProtos: ConditionProto[] = [];

    for (const proto of protos) {
      monsterProtos = monsterProtos.concat(proto.getMonstersList());
      npcProtos = npcProtos.concat(proto.getNpcsList());
      conditionProtos = conditionProtos.concat(proto.getConditionsList());
    }

    const monsters = await Promise.all(monsterProtos.map((m) => Monster.fromProto(this.itemService, m)));
    this.monsters.resolve(monsters);

    const npcs = await Promise.all(npcProtos.map((n) => NPC.fromProto(this.itemService, n)));
    this.npcs.resolve(npcs);

    // Need to add NPCs a second time to ensure that the race is properly resolved.
    // TODO: Check wether we can just update the entities instead of inserting them again.
    for (const npc of await this.npcs.getAll()) {
      this.npcs.insertEntity(await npc.resolveRace(this.monsters), true);
    }

    const conditions = await Promise.all(conditionProtos.map((c) => Condition.fromProto(c)));
    this.conditions.resolve(conditions);
  }
}
