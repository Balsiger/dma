import { MonsterProto } from '../proto/generated/template_pb';
import { Abilities } from './ability';

export enum Name {
  unknown = 'Unknown',
  athletics = 'Athletics',
  acrobatics = 'Acrobatics',
  slightOfHand = 'Sleight of Hand',
  stealth = 'Stealth',
  arcana = 'Arcana',
  history = 'History',
  investigation = 'Investigation',
  nature = 'Nature',
  religation = 'Religion',
  animalHandling = 'Animal Handling',
  insight = 'Insight',
  medicine = 'Medicine',
  perception = 'Perception',
  survival = 'Survival',
  deception = 'Deception',
  intimidation = 'Intimidation',
  performance = 'Performance',
  persuasion = 'Persuasion',
}

const STRENGTH_SKILLS = [Name.athletics];
const DEXTERITY_SKILLS = [Name.acrobatics, Name.slightOfHand, Name.stealth];
const INTELLIGENCE_SKILLS = [Name.arcana, Name.history, Name.investigation, Name.nature, Name.religation];
const WISDOM_SKILLS = [Name.animalHandling, Name.insight, Name.medicine, Name.perception, Name.survival];
const CHARISMA_SKILLS = [Name.deception, Name.intimidation, Name.performance, Name.persuasion];

export class Skill {
  constructor(readonly name: string, readonly modifier: number, readonly skilled: boolean) {}
}

export class Skills {
  readonly skills: Skill[] = [];

  constructor(readonly abilities: Abilities, proficiency: number, proficients: Name[], doubleProficients: Name[]) {
    this.process(STRENGTH_SKILLS, abilities.strength.modifier, proficiency, proficients, doubleProficients);
    this.process(DEXTERITY_SKILLS, abilities.dexterity.modifier, proficiency, proficients, doubleProficients);
    this.process(INTELLIGENCE_SKILLS, abilities.intelligence.modifier, proficiency, proficients, doubleProficients);
    this.process(WISDOM_SKILLS, abilities.wisdom.modifier, proficiency, proficients, doubleProficients);
    this.process(CHARISMA_SKILLS, abilities.charisma.modifier, proficiency, proficients, doubleProficients);

    this.skills.sort((a, b) => a.name.localeCompare(b.name));
  }

  private process(
    skills: Name[],
    abilityModifier: number,
    proficiency: number,
    proficients: Name[],
    doubleProficients: Name[]
  ) {
    for (const name of skills) {
      const skilled = proficients.indexOf(name) >= 0;
      const doubleSkilled = doubleProficients.indexOf(name) >= 0;
      this.skills.push(
        new Skill(
          name,
          abilityModifier + (skilled ? proficiency : 0) + (doubleSkilled ? 2 * proficiency : 0),
          skilled || doubleSkilled
        )
      );
    }
  }

  getSkill(name: Name): Skill | undefined {
    for (const skill of this.skills) {
      if (skill.name === name) {
        return skill;
      }
    }

    return undefined;
  }

  static convertSkill(skill: number): Name {
    switch (skill) {
      case MonsterProto.Skill.ATHLETICS:
        return Name.athletics;
      case MonsterProto.Skill.ACROBATICS:
        return Name.acrobatics;
      case MonsterProto.Skill.SLEIGHT_OF_HAND:
        return Name.slightOfHand;
      case MonsterProto.Skill.STEALTH:
        return Name.stealth;
      case MonsterProto.Skill.ARCANA:
        return Name.arcana;
      case MonsterProto.Skill.HISTORY:
        return Name.history;
      case MonsterProto.Skill.INVESTIGATION:
        return Name.investigation;
      case MonsterProto.Skill.NATURE:
        return Name.nature;
      case MonsterProto.Skill.RELIGTION:
        return Name.religation;
      case MonsterProto.Skill.ANIMAL_HANDLING:
        return Name.animalHandling;
      case MonsterProto.Skill.INSIGHT:
        return Name.insight;
      case MonsterProto.Skill.MEDICINE:
        return Name.medicine;
      case MonsterProto.Skill.PERCEPTION:
        return Name.perception;
      case MonsterProto.Skill.SURVIVAL:
        return Name.survival;
      case MonsterProto.Skill.DECEPTION:
        return Name.deception;
      case MonsterProto.Skill.INTIMIDATION:
        return Name.intimidation;
      case MonsterProto.Skill.PERFORMANCE:
        return Name.performance;
      case MonsterProto.Skill.PERSUASION:
        return Name.persuasion;

      default:
        return Name.unknown;
    }
  }

  static namesFromString(text: string): Name[] {
    const parts = text.split(/\|/);
    const names: Name[] = [];
    for (const part of parts) {
      names.push(Skills.nameFromString(part));
    }
    return names;
  }

  static nameFromString(text: string): Name {
    for (const value in Name) {
      const name = Name[value as keyof typeof Name];
      if (name.toLowerCase() === text.toLowerCase()) {
        return name;
      }
    }

    return Name.unknown;
  }
}
