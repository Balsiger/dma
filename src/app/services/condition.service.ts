import { Injectable } from '@angular/core';
import { Condition } from '../data/facts/condition';
import { ProtoRpc } from '../net/ProtoRpc';
import { ConditionsProto } from '../proto/generated/template_pb';
import { EntityService } from './entity.service';

@Injectable({
  providedIn: 'root',
})
export class ConditionService extends EntityService<Condition, ConditionsProto> {
  constructor() {
    super('/assets/data/conditions.pb', Condition.create, new ProtoRpc(ConditionsProto.deserializeBinary), (p) =>
      p.getConditionsList().map((i) => Condition.fromProto(i)),
    );
  }
}
