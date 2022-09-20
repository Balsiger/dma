import { Injectable } from '@angular/core';
import { Item } from '../data/item';
import { ProtoRpc } from '../net/ProtoRpc';
import { ItemsProto } from '../proto/generated/template_pb';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private readonly itemsByName = new Map<string, Item>();
  private readonly rpc = new ProtoRpc(ItemsProto.deserializeBinary);

  constructor() {}

  async getItem(name: string): Promise<Item> {
    await this.fetch();
    return this.itemsByName.get(name) || Item.create(name);
  }

  private async fetch() {
    if (this.itemsByName.size === 0) {
      const proto = await this.rpc.fetch('/assets/data/items.pb');
      let items = proto.getItemsList().map((i) => Item.fromProto(i));

      do {
        const unresolved: Item[] = [];
        for (const item of items) {
          if (this.available(item.common.bases)) {
            this.itemsByName.set(item.name, item.resolve(item.common.bases.map((i) => this.itemsByName.get(i)!)));
          } else {
            unresolved.push(item);
          }
        }

        if (unresolved.length >= items.length) {
          throw new Error('There seesm to be a loop in bases for items!');
        } else {
          items = unresolved;
        }
      } while (items.length > 0);
    }
  }

  private available(names: string[]): boolean {
    for (const name of names) {
      if (!this.itemsByName.has(name)) {
        return false;
      }
    }

    return true;
  }
}
