import { MonsterProto } from '../../proto/generated/template_pb';
import { AbilityType } from './enums/ability_type';

export class Ability {
  constructor(
    readonly type: AbilityType,
    readonly value: number,
    readonly modifier: number = Ability.computeModifier(value)
  ) {}

  toString(): string {
    return `${this.type} ${this.value} (${this.modifier})`;
  }

  static computeModifier(value: number): number {
    return Math.floor((value - 10) / 2);
  }

  withModifier(modifier: number): Ability {
    return new Ability(this.type, this.value, modifier);
  }

  withMaxModifier(modifier: number): Ability {
    return new Ability(this.type, this.value, Math.min(this.modifier, modifier));
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
    this.abilities = new Array(7);
    this.abilities[AbilityType.UNKNOWN.proto] = new Ability(AbilityType.UNKNOWN, 0);
    this.abilities[AbilityType.STRENGTH.proto] = strength;
    this.abilities[AbilityType.DEXTERITY.proto] = dexterity;
    this.abilities[AbilityType.CONSTITUTION.proto] = constitution;
    this.abilities[AbilityType.INTELLIGENCE.proto] = intelligence;
    this.abilities[AbilityType.WISDOM.proto] = wisdom;
    this.abilities[AbilityType.CHARISMA.proto] = charisma;
  }

  getAbility(type: AbilityType): Ability {
    return this.abilities[type.proto];
  }

  withAbility(ability: Ability): Abilities {
    switch (ability.type) {
      case AbilityType.STRENGTH:
        return new Abilities(ability, this.dexterity, this.constitution, this.intelligence, this.wisdom, this.charisma);
      case AbilityType.DEXTERITY:
        return new Abilities(this.strength, ability, this.constitution, this.intelligence, this.wisdom, this.charisma);
      case AbilityType.CONSTITUTION:
        return new Abilities(this.strength, this.dexterity, ability, this.intelligence, this.wisdom, this.charisma);
      case AbilityType.INTELLIGENCE:
        return new Abilities(this.strength, this.dexterity, this.constitution, ability, this.wisdom, this.charisma);
      case AbilityType.WISDOM:
        return new Abilities(
          this.strength,
          this.dexterity,
          this.constitution,
          this.intelligence,
          ability,
          this.charisma
        );
      case AbilityType.CHARISMA:
        return new Abilities(this.strength, this.dexterity, this.constitution, this.intelligence, this.wisdom, ability);

      default:
        return this;
    }
  }

  resolve(bases: Abilities[], values: Map<string, string>): Abilities {
    return new Abilities(
      Abilities.maybeOverride(
        values,
        AbilityType.STRENGTH,
        Abilities.resolveAbility(
          this.strength,
          bases.map((a) => a.strength)
        )
      ),
      Abilities.maybeOverride(
        values,
        AbilityType.DEXTERITY,
        Abilities.resolveAbility(
          this.dexterity,
          bases.map((a) => a.dexterity)
        )
      ),
      Abilities.maybeOverride(
        values,
        AbilityType.CONSTITUTION,
        Abilities.resolveAbility(
          this.constitution,
          bases.map((a) => a.constitution)
        )
      ),
      Abilities.maybeOverride(
        values,
        AbilityType.INTELLIGENCE,
        Abilities.resolveAbility(
          this.intelligence,
          bases.map((a) => a.intelligence)
        )
      ),
      Abilities.maybeOverride(
        values,
        AbilityType.WISDOM,
        Abilities.resolveAbility(
          this.wisdom,
          bases.map((a) => a.wisdom)
        )
      ),
      Abilities.maybeOverride(
        values,
        AbilityType.CHARISMA,
        Abilities.resolveAbility(
          this.charisma,
          bases.map((a) => a.charisma)
        )
      )
    );
  }

  private static maybeOverride(values: Map<string, string>, abilityType: AbilityType, other: Ability): Ability {
    const name = abilityType.name.toLowerCase();
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
      new Ability(AbilityType.STRENGTH, proto.getStrength() || 0),
      new Ability(AbilityType.DEXTERITY, proto.getDexterity() || 0),
      new Ability(AbilityType.CONSTITUTION, proto.getConstitution() || 0),
      new Ability(AbilityType.INTELLIGENCE, proto.getIntelligence() || 0),
      new Ability(AbilityType.WISDOM, proto.getWisdom() || 0),
      new Ability(AbilityType.CHARISMA, proto.getCharisma() || 0)
    );
  }
}

export const EMPTY = new Abilities(
  new Ability(AbilityType.STRENGTH, 0),
  new Ability(AbilityType.DEXTERITY, 0),
  new Ability(AbilityType.CONSTITUTION, 0),
  new Ability(AbilityType.INTELLIGENCE, 0),
  new Ability(AbilityType.WISDOM, 0),
  new Ability(AbilityType.CHARISMA, 0)
);
