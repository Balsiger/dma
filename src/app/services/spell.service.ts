import { Injectable } from '@angular/core';
import { Spell } from '../data/spell';
import { ProtoRpc } from '../net/ProtoRpc';
import { SpellsProto } from '../proto/generated/template_pb';

@Injectable({
  providedIn: 'root',
})
export class SpellService {
  private readonly spellsByName = new Map<string, Spell>();
  private readonly rpc = new ProtoRpc(SpellsProto.deserializeBinary);

  constructor() {}

  async getSpell(name: string): Promise<Spell | undefined> {
    await this.load();
    return this.spellsByName.get(name);
  }

  private async load() {
    if (this.spellsByName.size > 0) {
      return new Promise<void>((resolve) => resolve());
    } else {
      const spells = await this.rpc.fetch('/assets/data/spells.pb');
      for (const spellProto of spells.getSpellsList()) {
        const spell = Spell.fromProto(spellProto);
        this.spellsByName.set(spell.name, spell);
      }
    }
  }
}
