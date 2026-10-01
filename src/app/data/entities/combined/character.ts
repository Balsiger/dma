import { signal } from '@angular/core';
import { FluidCharacterService } from '../../../services/fluid/character.service';
import { Campaign } from '../fluid/campaign';
import { FluidCharacter, FluidCharacterData as FluidData } from '../fluid/character';
import { NoImmutable } from '../immutable/immutable';
import { CharacterData, LocalCharacter } from '../local/character';
import { Combined } from './combined';
import { Creature, CreatureState, Type as CreatureType, HPState } from './creature';

export class Character
  extends Combined<NoImmutable, FluidCharacter, FluidData, FluidCharacterService, CharacterData, LocalCharacter>
  implements Creature
{
  // Fluid.
  override get name(): string {
    return this.fluid.name();
  }

  image = this.fluid.image;
  profile = this.fluid.profile;
  initiativeSound = this.fluid.initiativeSound;
  levels = this.fluid.levels;
  daysWithoutFood = this.fluid.daysWithoutFood.asReadonly();
  daysWithoutDrink = this.fluid.daysWithoutDrink.asReadonly();
  levelSummary = this.fluid.levelSummary;
  daysPassed = this.fluid.daysPassed;

  drink = this.fluid.drink.bind(this.fluid);
  eat = this.fluid.eat.bind(this.fluid);

  // Local.
  x = this.local.x;
  y = this.local.y;

  // Creature.
  id = '';
  portrait = this.fluid.profile().url;
  uniqueName = this.name;
  type = CreatureType.character;
  state = signal(CreatureState.alive);
  hp = signal(0);
  maxHp = signal(0);
  hpFill = signal('0%');
  hpState = signal(HPState.none);
  initiativeModifier = signal(0);
  store = this.local.store.bind(this.local);
  setPosition = this.local.setPosition.bind(this.local);
  clearPosition = this.local.clearPosition.bind(this.local);

  constructor(fluid: FluidCharacter, service: FluidCharacterService, local: LocalCharacter) {
    super(new NoImmutable(), fluid, service, local);
  }

  reset(): void {
    // Characters cannot be rest ever.
  }

  updateHp(diff: number): void {
    // TODO: add hp handling to characters.
  }

  setHp(hp: number): void {
    // TODO: add hp handling to characters.
  }

  static fromFluidData(
    campaign: Campaign,
    characterService: FluidCharacterService,
    name: string,
    data: FluidData,
    context: string,
  ): Character {
    return new Character(
      FluidCharacter.fromData(campaign, characterService, name, data),
      characterService,
      new LocalCharacter(name, context),
    );
  }
}
