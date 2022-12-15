import { Injectable } from '@angular/core';
import { Monster } from '../data/entities/monster';
import { ProtoRpc } from '../net/ProtoRpc';
import { MonstersProto } from '../proto/generated/template_pb';
import { EntityService } from './entity.service';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root',
})
export class MonsterService extends EntityService<Monster, MonstersProto> {
  constructor(itemService: ItemService) {
    super('/assets/data/monsters.pb', Monster.create, new ProtoRpc(MonstersProto.deserializeBinary), undefined, (p) =>
      p.getMonstersList().map((m) => Monster.fromProto(itemService, m))
    );
  }
}
