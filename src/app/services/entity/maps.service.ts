import { Injectable } from '@angular/core';
import { BattleMap } from '../../data/entities/battle_map';
import { ProtoRpc } from '../../net/ProtoRpc';
import { MapsProto } from '../../proto/generated/template_pb';
import { EntityService } from './entity.service';

@Injectable({ providedIn: 'root' })
export class MapsService extends EntityService<BattleMap, MapsProto> {
  constructor() {
    super('/assets/data/maps.pb', BattleMap.create, new ProtoRpc(MapsProto.deserializeBinary), (p) =>
      p.getMapsList().map((m) => BattleMap.fromProto(m)),
    );
  }
}
