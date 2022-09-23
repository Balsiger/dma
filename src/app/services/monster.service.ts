import { Injectable } from '@angular/core';
import { Monster } from '../data/monster';
import { ProtoRpc } from '../net/ProtoRpc';
import { MonstersProto } from '../proto/generated/template_pb';
import { EntityService } from './entity.service';

@Injectable({
  providedIn: 'root',
})
export class MonsterService extends EntityService<Monster, MonstersProto> {
  constructor() {
    super('/assets/data/monsters.pb', Monster.create, new ProtoRpc(MonstersProto.deserializeBinary), (p) =>
      p.getMonstersList().map((m) => Monster.fromProto(m))
    );
  }
}
