import { Injectable } from '@angular/core';
import { Spell } from '../../data/entities/spell';
import { ProtoRpc } from '../../net/ProtoRpc';
import { SpellsProto } from '../../proto/generated/template_pb';
import { EntityService } from './entity.service';

@Injectable({
  providedIn: 'root',
})
export class SpellService extends EntityService<Spell, SpellsProto> {
  constructor() {
    super('/assets/data/spells.pb', Spell.create, new ProtoRpc(SpellsProto.deserializeBinary), (p) =>
      p.getSpellsList().map((s) => Spell.fromProto(s)),
    );
  }
}
