import { CharacterData, LocalCharacter } from '../../data/entities/local/character';
import { Context } from '../context';
import { LocalService } from './local.service';

export class LocalCharacterService extends LocalService<CharacterData, LocalCharacter> {
  constructor(context: Context, factory: (name: string, id: string) => LocalCharacter) {
    super(context.extendTerminal('character'), factory);
  }
}
