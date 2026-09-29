import { Loading } from '../../../common/loading';
import { ProtoRpc } from '../../../net/ProtoRpc';
import { ProductContentProto } from '../../../proto/generated/template_pb';
import { AdventureEntity } from '../immutable/adventure';
import { BattleMap } from '../immutable/battle-map';
import { ImmutableEncounter } from '../immutable/encounter-entity';
import { Event } from '../immutable/event';
import { God } from '../immutable/god';
import { Group } from '../immutable/group';
import { Immutables } from '../immutable/immutables';
import { Item } from '../immutable/item';
import { Miniature } from '../immutable/miniature';
import { Monster } from '../immutable/monster';
import { NPCEntity } from '../immutable/npc-entity';
import { Place } from '../immutable/place';
import { Product } from '../immutable/product';
import { ProductContent } from '../immutable/product-content';
import { Spell } from '../immutable/spell';
import { Token } from '../immutable/token';
import { Trap } from '../immutable/trap';
import { Condition } from './condition';
import { Glossary } from './glossary';

export class EntityStorage extends Loading {
  private readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);
  adventures: Immutables<AdventureEntity> = new Immutables(AdventureEntity.create);
  monsters: Immutables<Monster> = new Immutables(Monster.create);
  npcs: Immutables<NPCEntity> = new Immutables(NPCEntity.create);
  conditions: Immutables<Condition> = new Immutables(Condition.create);
  glossary: Immutables<Glossary> = new Immutables(Glossary.create);
  items: Immutables<Item> = new Immutables(Item.create);
  spells: Immutables<Spell> = new Immutables(Spell.create);
  encounters: Immutables<ImmutableEncounter> = new Immutables(ImmutableEncounter.create);
  traps: Immutables<Trap> = new Immutables(Trap.create);
  products: Immutables<Product> = new Immutables(Product.create);
  gods: Immutables<God> = new Immutables(God.create);
  places: Immutables<Place> = new Immutables(Place.create);
  events: Immutables<Event> = new Immutables(Event.create);
  groups: Immutables<Group> = new Immutables(Group.create);
  miniatures: Immutables<Miniature> = new Immutables(Miniature.create);
  maps: Immutables<BattleMap> = new Immutables(BattleMap.create);
  tokens: Immutables<Token> = new Immutables(Token.create);

  constructor(private readonly paths: string[]) {
    super();

    this.load();
  }

  protected async doLoad() {
    const fetches = this.paths.map((p) => this.rpc.fetch(p));
    const protos = await Promise.all(fetches);

    for (const proto of protos) {
      const productContent = ProductContent.fromProto(proto);
      const items = await Promise.all(proto.getItemsList().map((c) => Item.fromProto(c, productContent)));
      this.items.resolve(items);

      const monsters = await Promise.all(
        proto.getMonstersList().map((m) => Monster.fromProto(this.items, m, productContent)),
      );
      this.monsters.resolve(monsters);

      const npcs = await Promise.all(
        proto.getNpcsList().map((n) => NPCEntity.fromProto(this.items, n, productContent)),
      );
      this.npcs.resolve(npcs);

      // Need to add NPCs a second time to ensure that the race is properly resolved.
      // TODO: Check wether we can just update the entities instead of inserting them again.
      // TODO: This is redoing all npcs for each of the product contents read!
      for (const npc of await this.npcs.getAll()) {
        this.npcs.insertImmutable(await npc.resolveRace(this.monsters), true);
      }

      const conditions = await Promise.all(
        proto.getConditionsList().map((c) => Condition.fromProto(c, productContent)),
      );
      this.conditions.resolve(conditions);

      const adventures = await Promise.all(
        proto.getAdventuresList().map((a) => AdventureEntity.fromProto(a, productContent)),
      );
      this.adventures.resolve(adventures);

      const glossary = await Promise.all(proto.getGlossariesList().map((c) => Glossary.fromProto(c, productContent)));
      this.glossary.resolve(glossary);

      const spells = await Promise.all(proto.getSpellsList().map((s) => Spell.fromProto(s, productContent)));
      this.spells.resolve(spells);

      const products = await Promise.all(proto.getProductsList().map((p) => Product.fromProto(p, productContent)));
      this.products.resolve(products);

      const traps = await Promise.all(proto.getTrapsList().map((p) => Trap.fromProto(p, productContent)));
      this.traps.resolve(traps);

      const gods = await Promise.all(proto.getGodsList().map((p) => God.fromProto(p, productContent)));
      this.gods.resolve(gods);

      const places = await Promise.all(proto.getPlacesList().map((p) => Place.fromProto(p, productContent)));
      this.places.resolve(places);

      const events = await Promise.all(proto.getEventsList().map((p) => Event.fromProto(p, productContent)));
      this.events.resolve(events);

      const groups = await Promise.all(proto.getGroupsList().map((p) => Group.fromProto(p, productContent)));
      this.groups.resolve(groups);

      const miniatures = await Promise.all(
        proto.getMiniaturesList().map((m) => Miniature.fromProto(m), proto.getAbbreviation()),
      );
      this.miniatures.resolve(miniatures);

      const maps = await Promise.all(proto.getMapsList().map((m) => BattleMap.fromProto(m, productContent)));
      this.maps.resolve(maps);

      const tokens = await Promise.all(proto.getTokensList().map((t) => Token.fromProto(t, productContent)));
      this.tokens.resolve(tokens);

      const encounters = await Promise.all(
        proto
          .getEncountersList()
          .map((e) =>
            ImmutableEncounter.fromProto(
              e,
              productContent,
              this.npcs,
              this.monsters,
              this.items,
              this.spells,
              this.traps,
            ),
          ),
      );
      this.encounters.resolve(encounters);
    }
  }
}
