import { computed } from '@angular/core';
import { Character } from '../../data/entities/combined/character';
import { Campaign } from '../../data/entities/fluid/campaign';
import { FluidCharacter, FluidCharacterData } from '../../data/entities/fluid/character';
import { NoImmutable } from '../../data/entities/immutable/immutable';
import { NO_IMMUTABLES } from '../../data/entities/immutable/immutables';
import { LocalCharacter } from '../../data/entities/local/character';
import { LocalData } from '../../data/entities/local/local';
import { FirebaseService } from '../firebase.service';
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
    private readonly campaign: Campaign,
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

  all = computed(() =>
    this.fluidService.fluids().map((f) => Character.fromFluid(f, this.fluidService, this.campaign.name)),
  );

  static create(fireBaseService: FirebaseService, fluidService: FluidCharacterService, campaign: Campaign) {
    return new CharacterService(
      campaign,
      fluidService,
      new LocalCharacterService(
        'character',
        campaign.name,
        (name: string, id: string) => new LocalCharacter(name, campaign.name),
      ),
      (i, f, l) => new Character(f, fluidService, l),
    );
  }

  fromFluidData(campaign: Campaign, name: string, data: FluidCharacterData) {
    return Character.fromFluidData(campaign, this.fluidService, name, data, campaign.name);
  }
}
