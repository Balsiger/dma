import { MonsterProto } from '../proto/generated/template_pb';
import { Ability as AbilityProto } from '../proto/generated/value_pb';

export enum AbilityType {
  unknown,
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

      default:
        return 'UKN';
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

  getAbility(ability: AbilityType) {
    switch (ability) {
      case AbilityType.strength:
        return this.strength;
      case AbilityType.dexterity:
        return this.dexterity;
      case AbilityType.constitution:
        return this.constitution;
      case AbilityType.intelligence:
        return this.intelligence;
      case AbilityType.wisdom:
        return this.wisdom;
      case AbilityType.charisma:
        return this.charisma;

      default:
        return new Ability(AbilityType.unknown, 0);
    }
  }

  resolve(bases: Abilities[]): Abilities {
    return new Abilities(
      Abilities.resolveAbility(
        this.strength,
        bases.map((a) => a.strength)
      ),
      Abilities.resolveAbility(
        this.dexterity,
        bases.map((a) => a.dexterity)
      ),
      Abilities.resolveAbility(
        this.constitution,
        bases.map((a) => a.constitution)
      ),
      Abilities.resolveAbility(
        this.intelligence,
        bases.map((a) => a.intelligence)
      ),
      Abilities.resolveAbility(
        this.wisdom,
        bases.map((a) => a.wisdom)
      ),
      Abilities.resolveAbility(
        this.charisma,
        bases.map((a) => a.charisma)
      )
    );
  }

  static resolveAbility(base: Ability, other: Ability[]): Ability {
    if (base.value) {
      return base;
    }

    return other.find((a) => !!a.value) || new Ability(base.type, 0);
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

  static convertType(proto: number): AbilityType {
    switch (proto) {
      case AbilityProto.STRENGTH:
        return AbilityType.strength;
      case AbilityProto.DEXTERITY:
        return AbilityType.dexterity;
      case AbilityProto.CONSTITUTION:
        return AbilityType.constitution;
      case AbilityProto.INTELLIGENCE:
        return AbilityType.intelligence;
      case AbilityProto.WISDOM:
        return AbilityType.wisdom;
      case AbilityProto.CHARISMA:
        return AbilityType.charisma;

      default:
        return AbilityType.unknown;
    }
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
