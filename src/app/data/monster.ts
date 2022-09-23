import { MonsterProto } from '../proto/generated/template_pb';
import { Abilities, EMPTY as ABILITIES_EMPTY } from './ability';
import { Action } from './action';
import { Alignment } from './alignment';
import { Attack } from './attack';
import { Condition, ConditionType } from './condition';
import { Damage, DamageType } from './damage';
import { Dice } from './dice';
import { Common, Entity } from './entities/entity';
import { EMPTY as LANGUAGES_EMPTY, Languages } from './languages';
import { MonsterTag, MonsterType } from './monster-type';
import { EMPTY as RATIONAL_EMPTY, Rational } from './rational';
import { EMPTY as REFERENCES_EMPTY } from './references';
import { Resolve } from './resolve';
import { EMPTY as SENSES_EMPTY, Senses } from './senses';
import { Size } from './size';
import { Name as SkillName, Skill, Skills } from './skills';
import { Speed } from './speed';
import { Trait } from './trait';

const XP_PER_FRACTION = {
  0: 0,
  8: 25,
  4: 50,
  2: 100,
};

const XP_PER_CHALLENGE = {
  1: 200,
  2: 450,
  3: 700,
  4: 1100,
  5: 1800,
  6: 2300,
  7: 2900,
  8: 3900,
  9: 5000,
  10: 5900,
  11: 7200,
  12: 8400,
  13: 10000,
  14: 11500,
  15: 13000,
  16: 15000,
  17: 18000,
  18: 20000,
  19: 22000,
  20: 25000,
  21: 33000,
  22: 41000,
  23: 50000,
  24: 62000,
  25: 75000,
  26: 90000,
  27: 105000,
  28: 120000,
  29: 135000,
  30: 155000,
};

export class Monster extends Entity<Monster> {
  // These values are computed.
  readonly armorClass: number;
  readonly hitDice: Dice;
  readonly skills: Skills;
  readonly proficiency: number;
  readonly passivePerception: number;
  readonly xp: number;
  readonly toHitMelee: number;
  readonly toHitRanged: number;
  readonly attacks: Attack[];

  constructor(
    common: Common,
    readonly size: Size,
    readonly type: MonsterType,
    readonly tags: MonsterTag[],
    readonly alignment: Alignment,
    readonly naturalArmor: number,
    readonly abilities: Abilities,
    private readonly hitDiceNumber: number,
    readonly speeds: Speed[],
    private readonly proficientSkills: SkillName[],
    private readonly doubleProficientSkills: SkillName[],
    readonly damageImmunities: DamageType[],
    readonly conditionImmunities: ConditionType[],
    readonly senses: Senses,
    readonly languages: Languages,
    readonly challenge: Rational,
    readonly traits: Trait[],
    private readonly unmodifiedAttacks: Attack[],
    readonly actions: Action[]
  ) {
    super(common);

    this.armorClass = 10 + abilities.dexterity.modifier + naturalArmor;
    this.hitDice = new Dice(hitDiceNumber, this.size.hitDice, hitDiceNumber * this.abilities.constitution.modifier);
    this.proficiency = Math.ceil(challenge.value / 4) + 1;
    this.skills = new Skills(this.abilities, this.proficiency, proficientSkills, doubleProficientSkills);
    const perceptionSkill = this.skills.getSkill(SkillName.perception);
    this.passivePerception = perceptionSkill
      ? 10 + perceptionSkill.modifier
      : 10 + abilities.wisdom.modifier + (proficientSkills.indexOf(SkillName.perception) >= 0 ? this.proficiency : 0);
    this.xp = Monster.xpPerChallenge(this.challenge);
    this.toHitMelee = this.proficiency + this.abilities.strength.modifier;
    this.toHitRanged = this.proficiency + this.abilities.dexterity.modifier;
    this.attacks = unmodifiedAttacks.map((a) =>
      a.with(this.toHitMelee, this.toHitRanged, this.abilities.strength.modifier, this.abilities.dexterity.modifier)
    );
  }

  static fromProto(proto: MonsterProto): Monster {
    return new Monster(
      Common.fromProto(proto.getCommon()),
      Size.fromProto(proto.getSize()),
      MonsterType.fromProto(proto.getType()),
      proto.getTagsList().map((t) => MonsterTag.fromProto(t)),
      Alignment.fromProto(proto.getAlignment()),
      proto.getNaturalArmor(),
      Abilities.fromProto(proto.getAbilities()),
      proto.getHitDiceNumber(),
      proto.getSpeedList().map((s) => Speed.fromProto(s)),
      proto.getProficientSkillsList().map((s) => Skills.convertSkill(s)),
      proto.getDoubleProficientSkillsList().map((s) => Skills.convertSkill(s)),
      proto.getDamageImmunitiesList().map((d) => Damage.convertType(d)),
      proto.getConditionImmunitiesList().map((d) => Condition.convertType(d)),
      Senses.fromProto(proto.getSenses()),
      Languages.fromProto(proto.getLanguages()),
      Rational.fromProto(proto.getChallenge()),
      proto.getTraitsList().map((t) => Trait.fromProto(t)),
      proto.getAttacksList().map((a) => Attack.fromProto(a)),
      proto.getActionsList().map((a) => Action.fromProto(a))
    );
  }

  static create(name: string): Monster {
    return new Monster(
      new Common(name + ' (not found)', [], '', '', '', REFERENCES_EMPTY),
      Size.UNKNOWN,
      MonsterType.UNKNOWN,
      [],
      Alignment.UNKNOWN,
      0,
      ABILITIES_EMPTY,
      0,
      [],
      [],
      [],
      [],
      [],
      SENSES_EMPTY,
      LANGUAGES_EMPTY,
      RATIONAL_EMPTY,
      [],
      [],
      []
    );
  }

  static xpPerChallenge(challenge: Rational): number {
    if (challenge.leader === 0) {
      return XP_PER_FRACTION[challenge.denominator as keyof typeof XP_PER_FRACTION] || 0;
    }

    return XP_PER_CHALLENGE[challenge.leader as keyof typeof XP_PER_CHALLENGE] || 0;
  }

  filterSkills(skilled: boolean): Skill[] {
    if (skilled) {
      return this.skills.skills.filter((s) => s.skilled);
    } else {
      return this.skills.skills;
    }
  }

  resolve(bases: Monster[]): Monster {
    if (bases.length === 0) {
      return this;
    }

    return new Monster(
      this.common,
      this.size.resolve(bases.map((m) => m.size)),
      this.type.resolve(bases.map((m) => m.type)),
      Resolve.dedupe(
        this.tags,
        bases.map((m) => m.tags)
      ),
      this.alignment.resolve(bases.map((m) => m.alignment)),
      Resolve.max(
        this.naturalArmor,
        bases.map((m) => m.naturalArmor)
      ),
      this.abilities.resolve(bases.map((m) => m.abilities)),
      Resolve.max(
        this.hitDiceNumber,
        bases.map((m) => m.hitDiceNumber)
      ),
      Speed.resolve(
        this.speeds,
        bases.map((m) => m.speeds)
      ),
      Resolve.dedupe(
        this.proficientSkills,
        bases.map((m) => m.proficientSkills)
      ),
      Resolve.dedupe(
        this.doubleProficientSkills,
        bases.map((m) => m.doubleProficientSkills)
      ),
      Resolve.dedupe(
        this.damageImmunities,
        bases.map((m) => m.damageImmunities)
      ),
      Resolve.dedupe(
        this.conditionImmunities,
        bases.map((m) => m.conditionImmunities)
      ),
      this.senses.resolve(bases.map((m) => m.senses)),
      this.languages.resolve(bases.map((m) => m.languages)),
      Resolve.maxRational(
        this.challenge,
        bases.map((m) => m.challenge)
      ),
      Resolve.dedupe(
        this.traits,
        bases.map((m) => m.traits)
      ),
      [...this.unmodifiedAttacks, ...bases.flatMap((m) => m.unmodifiedAttacks)],
      [...this.actions, ...bases.flatMap((m) => m.actions)]
    );
  }
}
