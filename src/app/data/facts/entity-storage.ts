import { Loading } from '../../common/loading';
import { ProtoRpc } from '../../net/ProtoRpc';
import {
  ConditionProto,
  ItemProto,
  MapsProto,
  MiniatureProto,
  MonsterProto,
  NPCProto,
  ProductContentProto,
  ProductProto,
  SpellProto,
  TokensProto,
} from '../../proto/generated/template_pb';
import { BattleMap } from '../entities/battle-map';
import { Entities } from '../entities/entities';
import { Item } from '../entities/item';
import { Miniature } from '../entities/miniature';
import { Monster } from '../entities/monster';
import { NPC } from '../entities/npc';
import { Product } from '../entities/product';
import { Spell } from '../entities/spell';
import { Token } from '../entities/token';
import { Condition } from './condition';

export class EntityStorage extends Loading {
  private readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);
  monsters: Entities<Monster> = new Entities(Monster.create);
  npcs: Entities<NPC> = new Entities(NPC.create);
  conditions: Entities<Condition> = new Entities(Condition.create);
  items: Entities<Item> = new Entities(Item.create);
  spells: Entities<Spell> = new Entities(Spell.create);
  products: Entities<Product> = new Entities(Product.create);
  miniatures: Entities<Miniature> = new Entities(Miniature.create);
  maps: Entities<BattleMap> = new Entities(BattleMap.create);
  tokens: Entities<Token> = new Entities(Token.create);

  constructor(private readonly paths: string[]) {
    super();

    this.load();
  }

  protected async doLoad() {
    const fetches = this.paths.map((p) => this.rpc.fetch(p));
    const protos = await Promise.all(fetches);

    let monsterProtos: MonsterProto[] = [];
    let npcProtos: NPCProto[] = [];
    let conditionProtos: ConditionProto[] = [];
    let itemProtos: ItemProto[] = [];
    let spellProtos: SpellProto[] = [];
    let productProtos: ProductProto[] = [];
    let miniatureProtos: MiniatureProto[] = [];
    let mapProtos: MapsProto.Map[] = [];
    let tokenProtos: TokensProto.Token[] = [];

    for (const proto of protos) {
      monsterProtos = monsterProtos.concat(proto.getMonstersList());
      npcProtos = npcProtos.concat(proto.getNpcsList());
      conditionProtos = conditionProtos.concat(proto.getConditionsList());
      itemProtos = itemProtos.concat(proto.getItemsList());
      spellProtos = spellProtos.concat(proto.getSpellsList());
      productProtos = productProtos.concat(proto.getProductsList());
      miniatureProtos = miniatureProtos.concat(proto.getMiniaturesList());
      mapProtos = mapProtos.concat(proto.getMapsList());
      tokenProtos = tokenProtos.concat(proto.getTokensList());
    }

    const items = await Promise.all(itemProtos.map((c) => Item.fromProto(c)));
    this.items.resolve(items);

    const monsters = await Promise.all(monsterProtos.map((m) => Monster.fromProto(this.items, m)));
    this.monsters.resolve(monsters);

    const npcs = await Promise.all(npcProtos.map((n) => NPC.fromProto(this.items, n)));
    this.npcs.resolve(npcs);

    // Need to add NPCs a second time to ensure that the race is properly resolved.
    // TODO: Check wether we can just update the entities instead of inserting them again.
    for (const npc of await this.npcs.getAll()) {
      this.npcs.insertEntity(await npc.resolveRace(this.monsters), true);
    }

    const conditions = await Promise.all(conditionProtos.map((c) => Condition.fromProto(c)));
    this.conditions.resolve(conditions);

    const spells = await Promise.all(spellProtos.map((s) => Spell.fromProto(s)));
    this.spells.resolve(spells);

    const products = await Promise.all(productProtos.map((p) => Product.fromProto(p)));
    this.products.resolve(products);

    const miniatures = await Promise.all(miniatureProtos.map((m) => Miniature.fromProto(m)));
    this.miniatures.resolve(miniatures);

    const maps = await Promise.all(mapProtos.map((m) => BattleMap.fromProto(m)));
    this.maps.resolve(maps);

    const tokens = await Promise.all(tokenProtos.map((t) => Token.fromProto(t)));
    this.tokens.resolve(tokens);
  }
}
