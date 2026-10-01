import { CharacterData, LocalCharacter } from '../../data/entities/local/character';
import { LocalService } from './local.service';

export class LocalCharacterService extends LocalService<CharacterData, LocalCharacter> {
  constructor(context: string, factory: (name: string, id: string) => LocalCharacter) {
    super('character', context, factory);
  }
}
