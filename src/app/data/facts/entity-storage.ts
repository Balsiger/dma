import { Loading } from '../../common/loading';
import { ProtoRpc } from '../../net/ProtoRpc';
import { ProductContentProto } from '../../proto/generated/template_pb';
import { BattleMap } from '../entities/battle-map';
import { EncounterEntity } from '../entities/encounter-entity';
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
  encounters: Entities<EncounterEntity> = new Entities(EncounterEntity.create);
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

    for (const proto of protos) {
      const items = await Promise.all(
        proto.getItemsList().map((c) => Item.fromProto(c, proto.getName(), proto.getId())),
      );
      this.items.resolve(items);

      const monsters = await Promise.all(
        proto.getMonstersList().map((m) => Monster.fromProto(this.items, m, proto.getName(), proto.getId())),
      );
      this.monsters.resolve(monsters);

      const npcs = await Promise.all(
        proto.getNpcsList().map((n) => NPC.fromProto(this.items, n, proto.getName(), proto.getId())),
      );
      this.npcs.resolve(npcs);

      // Need to add NPCs a second time to ensure that the race is properly resolved.
      // TODO: Check wether we can just update the entities instead of inserting them again.
      for (const npc of await this.npcs.getAll()) {
        this.npcs.insertEntity(await npc.resolveRace(this.monsters), true);
      }

      const conditions = await Promise.all(
        proto.getConditionsList().map((c) => Condition.fromProto(c, proto.getName(), proto.getId())),
      );
      this.conditions.resolve(conditions);

      const spells = await Promise.all(
        proto.getSpellsList().map((s) => Spell.fromProto(s, proto.getName(), proto.getId())),
      );
      this.spells.resolve(spells);

      const products = await Promise.all(
        proto.getProductsList().map((p) => Product.fromProto(p, proto.getName(), proto.getId())),
      );
      this.products.resolve(products);

      const miniatures = await Promise.all(proto.getMiniaturesList().map((m) => Miniature.fromProto(m)));
      this.miniatures.resolve(miniatures);

      const maps = await Promise.all(
        proto.getMapsList().map((m) => BattleMap.fromProto(m, proto.getName(), proto.getId())),
      );
      this.maps.resolve(maps);

      const tokens = await Promise.all(
        proto.getTokensList().map((t) => Token.fromProto(t, proto.getName(), proto.getId())),
      );
      this.tokens.resolve(tokens);

      const encounters = await Promise.all(
        proto
          .getEncountersList()
          .map((e) =>
            EncounterEntity.fromProto(
              e,
              proto.getName(),
              proto.getId(),
              this.npcs,
              this.monsters,
              this.items,
              this.spells,
            ),
          ),
      );
      this.encounters.resolve(encounters);
    }
  }
}
