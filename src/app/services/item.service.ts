import { Injectable } from '@angular/core';
import { Item } from '../data/item';
import { ProtoRpc } from '../net/ProtoRpc';
import { ItemsProto } from '../proto/generated/template_pb';
import { EntityService } from './entity.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends EntityService<Item, ItemsProto> {
  constructor() {
    super('/assets/data/items.pb', Item.create, new ProtoRpc(ItemsProto.deserializeBinary), (p) =>
      p.getItemsList().map((i) => Item.fromProto(i))
    );
  }
}
