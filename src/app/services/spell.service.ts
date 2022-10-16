import { Injectable } from '@angular/core';
import { Spell } from '../data/spell';
import { ProtoRpc } from '../net/ProtoRpc';
import { SpellsProto } from '../proto/generated/template_pb';
import { EntityService } from './entity.service';

@Injectable({
  providedIn: 'root',
})
export class SpellService extends EntityService<Spell, SpellsProto> {
  constructor() {
    super('/assets/data/spells.pb', Spell.create, new ProtoRpc(SpellsProto.deserializeBinary), (p) =>
      p.getSpellsList().map((s) => Spell.fromProto(s))
    );
  }

  /*
  async getSpell(name: string): Promise<Spell | undefined> {
    await this.load();
    return this.spellsByName.get(name);
  }

  private async load() {
    if (this.spellsByName.size === 0) {
      const spells = await this.rpc.fetch('/assets/data/spells.pb');
      for (const spellProto of spells.getSpellsList()) {
        const spell = Spell.fromProto(spellProto);
        this.spellsByName.set(spell.name, spell);
      }
    }
  }
  */
}
