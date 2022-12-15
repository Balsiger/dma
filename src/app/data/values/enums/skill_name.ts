import { MonsterProto } from '../../../proto/generated/template_pb';
import { Enum } from './enum';

export class SkillName extends Enum<SkillName> {
  static readonly names: SkillName[] = [];

  static readonly UNKNOWN = new SkillName('Unknown', MonsterProto.Skill.UNKNOWN_SKILL);
  static readonly ATHLETICS = new SkillName('Atheltics', MonsterProto.Skill.ATHLETICS);
  static readonly ACROBATICS = new SkillName('Acrobatics', MonsterProto.Skill.ACROBATICS);
  static readonly SLEIGHT_OF_HAND = new SkillName('Sleight of Hand', MonsterProto.Skill.SLEIGHT_OF_HAND);
  static readonly STEALTH = new SkillName('Stealth', MonsterProto.Skill.STEALTH);
  static readonly ARCANA = new SkillName('Arcana', MonsterProto.Skill.ARCANA);
  static readonly HISTORY = new SkillName('History', MonsterProto.Skill.HISTORY);
  static readonly INVESTIGATION = new SkillName('Investigation', MonsterProto.Skill.INVESTIGATION);
  static readonly NATURE = new SkillName('Nature', MonsterProto.Skill.NATURE);
  static readonly RELIGION = new SkillName('Religion', MonsterProto.Skill.RELIGION);
  static readonly ANIMAL_HANDLING = new SkillName('Animal Handling', MonsterProto.Skill.ANIMAL_HANDLING);
  static readonly INSIGHT = new SkillName('Insight', MonsterProto.Skill.INSIGHT);
  static readonly MEDICINE = new SkillName('Medicine', MonsterProto.Skill.MEDICINE);
  static readonly PERCEPTION = new SkillName('Perception', MonsterProto.Skill.PERCEPTION);
  static readonly SURVIVAL = new SkillName('Survival', MonsterProto.Skill.SURVIVAL);
  static readonly DECEPTION = new SkillName('Deception', MonsterProto.Skill.DECEPTION);
  static readonly INTIMIDATION = new SkillName('Intimidation', MonsterProto.Skill.INTIMIDATION);
  static readonly PERFORMANCE = new SkillName('Performance', MonsterProto.Skill.PERFORMANCE);
  static readonly PERSUASION = new SkillName('Persuasion', MonsterProto.Skill.PERSUASION);

  constructor(name: string, proto: number) {
    super(name, proto);
    SkillName.names.push(this);
  }

  static fromString(text: string): SkillName {
    return Enum.fromStringValue(text, SkillName.names, SkillName.UNKNOWN);
  }

  static fromProto(proto: number | undefined): SkillName {
    return Enum.fromProtoValue(proto, SkillName.names, SkillName.UNKNOWN);
  }
}
