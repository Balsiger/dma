import { Injectable } from '@angular/core';
import { Monster } from '../data/monster';
import { ProtoRpc } from '../net/ProtoRpc';
import { MonstersProto } from '../proto/generated/template_pb';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  private readonly monstersByName = new Map<string, Monster>();
  private readonly rpc = new ProtoRpc(MonstersProto.deserializeBinary);

  constructor() {}

  async getMonster(name: string): Promise<Monster> {
    await this.load();
    const monster = this.monstersByName.get(name.toLocaleLowerCase());
    if (!monster) {
      return Monster.create(name);
    }

    return monster;
  }

  private async load() {
    if (this.monstersByName.size === 0) {
      const monsters = await this.rpc.fetch('/assets/data/monsters.pb');
      for (const monsterProto of monsters.getMonstersList()) {
        const monster = Monster.fromProto(monsterProto);
        this.monstersByName.set(monster.name.toLocaleLowerCase(), monster);
      }
    }
  }
}
