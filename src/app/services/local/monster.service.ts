import { LocalMonster, MonsterData } from '../../data/entities/local/monster';
import { LocalService } from './local.service';

export class LocalMonsterService extends LocalService<MonsterData, LocalMonster> {
  constructor(context: string, factory: (name: string, id: string) => LocalMonster) {
    super('monster', context, factory);
  }
}
