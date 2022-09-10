import { MonsterProto } from '../proto/generated/template_pb';

export enum AbilityType {
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
}

export class Ability {
  readonly modifier: number;
  readonly short: string;

  constructor(readonly type: AbilityType, readonly value: number) {
    this.modifier = Ability.computeModifier(value);
    this.short = Ability.short(type);
  }

  toString(): string {
    return `${this.type} ${this.value} (${this.modifier})`;
  }

  private static short(type: AbilityType) {
    switch (type) {
      case AbilityType.strength:
        return 'STR';
      case AbilityType.dexterity:
        return 'DEX';
      case AbilityType.constitution:
        return 'CON';
      case AbilityType.intelligence:
        return 'INT';
      case AbilityType.wisdom:
        return 'WIS';
      case AbilityType.charisma:
        return 'CHR';
    }
  }

  static computeModifier(value: number): number {
    return Math.floor((value - 10) / 2);
  }
}

export class Abilities {
  readonly abilities: Ability[];

  constructor(
    readonly strength: Ability,
    readonly dexterity: Ability,
    readonly constitution: Ability,
    readonly intelligence: Ability,
    readonly wisdom: Ability,
    readonly charisma: Ability
  ) {
    this.abilities = [strength, dexterity, constitution, intelligence, wisdom, charisma];
  }

  static fromProto(proto: MonsterProto.Abilities | undefined): Abilities {
    if (!proto) {
      return EMPTY;
    }

    return new Abilities(
      new Ability(AbilityType.strength, proto.getStrength() || 0),
      new Ability(AbilityType.dexterity, proto.getDexterity() || 0),
      new Ability(AbilityType.constitution, proto.getConstitution() || 0),
      new Ability(AbilityType.intelligence, proto.getIntelligence() || 0),
      new Ability(AbilityType.wisdom, proto.getWisdom() || 0),
      new Ability(AbilityType.charisma, proto.getCharisma() || 0)
    );
  }
}

export const EMPTY = new Abilities(
  new Ability(AbilityType.strength, 0),
  new Ability(AbilityType.dexterity, 0),
  new Ability(AbilityType.constitution, 0),
  new Ability(AbilityType.intelligence, 0),
  new Ability(AbilityType.wisdom, 0),
  new Ability(AbilityType.charisma, 0)
);
