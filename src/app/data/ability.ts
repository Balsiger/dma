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
  readonly short: string;

  constructor(
    readonly type: AbilityType,
    readonly value: number,
    readonly modifier: number = Ability.computeModifier(value)
  ) {
    this.short = Ability.short(type);
  }

  toString(): string {
    return `${this.type} ${this.value} (${this.modifier})`;
  }

  static short(type: AbilityType): string {
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

  static long(type: AbilityType): string {
    switch (type) {
      case AbilityType.strength:
        return 'Strength';
      case AbilityType.dexterity:
        return 'Dexterity';
      case AbilityType.constitution:
        return 'Constitution';
      case AbilityType.intelligence:
        return 'Intelligence';
      case AbilityType.wisdom:
        return 'Wisdom';
      case AbilityType.charisma:
        return 'Charisma';

      default:
        return 'Unknown';
    }
  }

  static computeModifier(value: number): number {
    return Math.floor((value - 10) / 2);
  }

  withModifier(modifier: number): Ability {
    return new Ability(this.type, this.value, modifier);
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

  withAbility(ability: Ability): Abilities {
    switch (ability.type) {
      case AbilityType.strength:
        return new Abilities(ability, this.dexterity, this.constitution, this.intelligence, this.wisdom, this.charisma);
      case AbilityType.dexterity:
        return new Abilities(this.strength, ability, this.constitution, this.intelligence, this.wisdom, this.charisma);
      case AbilityType.constitution:
        return new Abilities(this.strength, this.dexterity, ability, this.intelligence, this.wisdom, this.charisma);
      case AbilityType.intelligence:
        return new Abilities(this.strength, this.dexterity, this.constitution, ability, this.wisdom, this.charisma);
      case AbilityType.wisdom:
        return new Abilities(
          this.strength,
          this.dexterity,
          this.constitution,
          this.intelligence,
          ability,
          this.charisma
        );
      case AbilityType.charisma:
        return new Abilities(this.strength, this.dexterity, this.constitution, this.intelligence, this.wisdom, ability);

      default:
        return this;
    }
  }

  resolve(bases: Abilities[], values: Map<string, string>): Abilities {
    return new Abilities(
      Abilities.maybeOverride(
        values,
        AbilityType.strength,
        Abilities.resolveAbility(
          this.strength,
          bases.map((a) => a.strength)
        )
      ),
      Abilities.maybeOverride(
        values,
        AbilityType.dexterity,
        Abilities.resolveAbility(
          this.dexterity,
          bases.map((a) => a.dexterity)
        )
      ),
      Abilities.maybeOverride(
        values,
        AbilityType.constitution,
        Abilities.resolveAbility(
          this.constitution,
          bases.map((a) => a.constitution)
        )
      ),
      Abilities.maybeOverride(
        values,
        AbilityType.intelligence,
        Abilities.resolveAbility(
          this.intelligence,
          bases.map((a) => a.intelligence)
        )
      ),
      Abilities.maybeOverride(
        values,
        AbilityType.wisdom,
        Abilities.resolveAbility(
          this.wisdom,
          bases.map((a) => a.wisdom)
        )
      ),
      Abilities.maybeOverride(
        values,
        AbilityType.charisma,
        Abilities.resolveAbility(
          this.charisma,
          bases.map((a) => a.charisma)
        )
      )
    );
  }

  private static maybeOverride(values: Map<string, string>, abilityType: AbilityType, other: Ability): Ability {
    const name = Ability.long(abilityType).toLowerCase();
    if (values.has(name)) {
      return new Ability(abilityType, Number(values.get(name)));
    }

    return other;
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
