import { Abilities } from './entities/values/ability';
import { SkillName } from './entities/values/enums/skill_name';
import { Modifier, ModifierValue } from './entities/values/value';

export enum NName {
  unknown = 'Unknown',
  athletics = 'Athletics',
  acrobatics = 'Acrobatics',
  slightOfHand = 'Sleight of Hand',
  stealth = 'Stealth',
  arcana = 'Arcana',
  history = 'History',
  investigation = 'Investigation',
  nature = 'Nature',
  religion = 'Religion',
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

const STRENGTH_SKILLS = [SkillName.ATHLETICS];
const DEXTERITY_SKILLS = [SkillName.ACROBATICS, SkillName.SLEIGHT_OF_HAND, SkillName.STEALTH];
const INTELLIGENCE_SKILLS = [
  SkillName.ARCANA,
  SkillName.HISTORY,
  SkillName.INVESTIGATION,
  SkillName.NATURE,
  SkillName.RELIGION,
];
const WISDOM_SKILLS = [
  SkillName.ANIMAL_HANDLING,
  SkillName.INSIGHT,
  SkillName.MEDICINE,
  SkillName.PERCEPTION,
  SkillName.SURVIVAL,
];
const CHARISMA_SKILLS = [SkillName.DECEPTION, SkillName.INTIMIDATION, SkillName.PERFORMANCE, SkillName.PERSUASION];

export class Skill {
  constructor(
    readonly name: SkillName,
    readonly modifier: ModifierValue,
    readonly skilled: boolean,
  ) {}
}

export class Skills {
  readonly skills: Skill[] = [];

  constructor(
    readonly abilities: Abilities,
    proficiency: number,
    proficients: SkillName[],
    doubleProficients: SkillName[],
  ) {
    this.process(STRENGTH_SKILLS, abilities.strength.modifier, 'Strength', proficiency, proficients, doubleProficients);
    this.process(
      DEXTERITY_SKILLS,
      abilities.dexterity.modifier,
      'Dexterity',
      proficiency,
      proficients,
      doubleProficients,
    );
    this.process(
      INTELLIGENCE_SKILLS,
      abilities.intelligence.modifier,
      'Intelligence',
      proficiency,
      proficients,
      doubleProficients,
    );
    this.process(WISDOM_SKILLS, abilities.wisdom.modifier, 'Wisdom', proficiency, proficients, doubleProficients);
    this.process(CHARISMA_SKILLS, abilities.charisma.modifier, 'Charisma', proficiency, proficients, doubleProficients);

    this.skills.sort((a, b) => a.name.name.localeCompare(b.name.name));
  }

  private process(
    skills: SkillName[],
    abilityModifier: number,
    abilityName: string,
    proficiency: number,
    proficients: SkillName[],
    doubleProficients: SkillName[],
  ) {
    for (const name of skills) {
      const skilled = proficients.indexOf(name) >= 0;
      const doubleSkilled = doubleProficients.indexOf(name) >= 0;
      this.skills.push(
        new Skill(
          name,
          new ModifierValue(
            0,
            '',
            this.generateModifiers(abilityModifier, abilityName, proficiency, skilled, doubleSkilled),
          ),
          skilled || doubleSkilled,
        ),
      );
    }
  }

  private generateModifiers(
    abilityModifer: number,
    abilityName: string,
    proficiency: number,
    skilled: boolean,
    doubleSkilled: boolean,
  ): Modifier<number>[] {
    const abilityModifier = new Modifier(abilityModifer, abilityName);
    if (doubleSkilled) {
      return [abilityModifier, new Modifier(2 * proficiency, 'double proficient')];
    }

    if (skilled) {
      return [abilityModifier, new Modifier(proficiency, 'proficient')];
    }

    return [abilityModifier];
  }

  getSkill(name: SkillName): Skill | undefined {
    for (const skill of this.skills) {
      if (skill.name === name) {
        return skill;
      }
    }

    return undefined;
  }

  /*
  static cconvertSkill(skill: number): Name {
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
      case MonsterProto.Skill.RELIGION:
        return Name.religion;
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
  */

  static namesFromString(text: string): SkillName[] {
    const parts = text.split(/\|/);
    const names: SkillName[] = [];
    for (const part of parts) {
      names.push(Skills.nameFromString(part));
    }
    return names;
  }

  static nameFromString(text: string): SkillName {
    return SkillName.fromString(text);
  }
}
