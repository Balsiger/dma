import { linkedSignal } from '@angular/core';
import { Character } from '../../data/entities/combined/character';
import { FluidCharacter, FluidCharacterData } from '../../data/entities/fluid/character';
import { NoImmutable } from '../../data/entities/immutable/immutable';
import { NO_IMMUTABLES } from '../../data/entities/immutable/immutables';
import { LocalCharacter } from '../../data/entities/local/character';
import { LocalData } from '../../data/entities/local/local';
import { FluidCharacterService } from '../fluid/character.service';
import { LocalCharacterService } from '../local/character.service';
import { CombinedService } from './combined.service';

export class CharacterService extends CombinedService<
  Character,
  NoImmutable,
  FluidCharacter,
  FluidCharacterData,
  FluidCharacterService,
  LocalData,
  LocalCharacter,
  LocalCharacterService
> {
  constructor(
    fluidService: FluidCharacterService,
    localService: LocalCharacterService,
    combinedConstructor: (i: NoImmutable, f: FluidCharacter, l: LocalCharacter) => Character,
  ) {
    super(NO_IMMUTABLES, fluidService, localService, combinedConstructor);
  }

  // Fluid.
  update(oldCharacter: Character, newCharacter: Character) {
    this.fluidService.update(oldCharacter.fluid, newCharacter.fluid);
  }

  add(character: Character) {
    this.fluidService.save(character.fluid);
  }

  // TODO: Here is a memory leak when a fluid character is deleted, the local character will stay forever.
  all = linkedSignal(() => {
    return this.fluidService
      .fluids()
      .map((f) => new Character(f, this.fluidService, this.localService.get(f.name(), '')));
  });

  static create(fluidService: FluidCharacterService, localService: LocalCharacterService) {
    return new CharacterService(fluidService, localService, (i, f, l) => new Character(f, fluidService, l));
  }

  fromFluidData(name: string, data: FluidCharacterData) {
    return Character.fromFluidData(this.fluidService, name, data, this.fluidService.context);
  }
}
