import { LocalMonster, MonsterData } from '../../data/entities/local/monster';
import { Context } from '../context';
import { LocalService } from './local.service';

export class LocalMonsterService extends LocalService<MonsterData, LocalMonster> {
  constructor(context: Context, factory: (name: string, id: string) => LocalMonster) {
    super(context.extend('monster'), factory);
  }
}
