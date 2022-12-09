import { MonsterProto } from '../proto/generated/template_pb';
import { ItemService } from '../services/item.service';
import { MonsterService } from '../services/monster.service';
import { Abilities, Ability, AbilityType, EMPTY as ABILITIES_EMPTY } from './ability';
import { Action } from './action';
import { Alignment } from './alignment';
import { Attack } from './attack';
import { Condition, ConditionType } from './condition';
import { Damage, DamageType } from './damage';
import { Dice } from './dice';
import { Common, Entity } from './entities/entity';
import { Item } from './item';
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
  0: 10,
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

const PATTERN_NAME = /^\s*(.*?)\s*(?:\[(.*)\])?\s*(?:\((.*)\))?$/;

export class Monster extends Entity<Monster> {
  // These values are computed.
  readonly armorClass: number;
  readonly armor: string;
  readonly hitDice: Dice;
  readonly savingThrows: { ability: string; value: number }[];
  readonly skills: Skills;
  readonly proficiency: number;
  readonly passivePerception: number;
  readonly xp: number;
  readonly toHitMelee: number;
  readonly toHitRanged: number;
  readonly toHitSpell: number;
  readonly attacks: Attack[];
  readonly abilities: Abilities;
  readonly itemsUsed: Item[];
  readonly itemsCarried: Item[];

  constructor(
    common: Common,
    readonly size: Size,
    readonly type: MonsterType,
    readonly tags: MonsterTag[],
    readonly alignment: Alignment,
    readonly naturalArmor: number,
    readonly unmodifiedAbilities: Abilities,
    readonly spellcastingAbility: AbilityType,
    private readonly hitDiceNumber: number,
    readonly speeds: Speed[],
    private readonly savingThrowTypes: AbilityType[],
    private readonly proficientSkills: SkillName[],
    private readonly doubleProficientSkills: SkillName[],
    readonly damageImmunities: DamageType[],
    readonly conditionImmunities: ConditionType[],
    readonly senses: Senses,
    readonly languages: Languages,
    readonly challenge: Rational,
    itemsUsedAll: Item[],
    itemsCarriedAll: Item[],
    readonly itemsRemoved: string[],
    readonly traits: Trait[],
    private readonly unmodifiedAttacks: Attack[],
    readonly actions: Action[],
    readonly reactions: Action[],
    readonly legendaryDescription: string,
    readonly legendaryActions: Action[]
  ) {
    super(common);

    this.itemsUsed = itemsUsedAll.filter((i) => itemsRemoved.indexOf(i.name.toLowerCase()) < 0);
    this.itemsCarried = itemsCarriedAll.filter((i) => itemsRemoved.indexOf(i.name.toLowerCase()) < 0);

    let armor = 0;
    let armorNames: string[] = [];
    let maxDex = 100;
    for (const item of this.itemsUsed) {
      if (item.armor) {
        armor += item.armor.ac;
        maxDex = Math.min(maxDex, item.armor.maxDexterity);
        armorNames.push(item.name);
      }
    }

    if (maxDex >= 0) {
      this.abilities = unmodifiedAbilities.withAbility(unmodifiedAbilities.dexterity.withMaxModifier(maxDex));
    } else {
      this.abilities = unmodifiedAbilities;
    }

    this.hitDice = new Dice(hitDiceNumber, this.size.hitDice, hitDiceNumber * this.abilities.constitution.modifier);
    this.proficiency = Math.max(1, Math.ceil(challenge.value / 4)) + 1;
    this.skills = new Skills(this.abilities, this.proficiency, proficientSkills, doubleProficientSkills);
    const perceptionSkill = this.skills.getSkill(SkillName.perception);
    this.savingThrows = this.savingThrowTypes.map((a) => ({
      ability: Ability.short(a),
      value: this.abilities.getAbility(a).modifier + this.proficiency,
    }));
    this.passivePerception = perceptionSkill
      ? 10 + perceptionSkill.modifier
      : 10 +
        this.abilities.wisdom.modifier +
        (proficientSkills.indexOf(SkillName.perception) >= 0 ? this.proficiency : 0);
    this.xp = Monster.xpPerChallenge(this.challenge);
    this.toHitMelee = this.proficiency + this.abilities.strength.modifier;
    this.toHitRanged = this.proficiency + this.abilities.dexterity.modifier;
    this.toHitSpell = this.proficiency + this.abilities.getAbility(this.spellcastingAbility).modifier;
    this.attacks = unmodifiedAttacks.map((a) =>
      a.with(
        this.toHitMelee,
        this.toHitRanged,
        this.toHitSpell,
        this.abilities.strength.modifier,
        this.abilities.dexterity.modifier,
        this.abilities.intelligence.modifier
      )
    );

    for (const item of this.itemsUsed) {
      if (item.weapon) {
        this.attacks.push(
          Attack.fromItem(
            item,
            this.toHitMelee,
            this.toHitRanged,
            this.abilities.strength.modifier,
            this.abilities.dexterity.modifier,
            this.size
          )
        );
      }
    }

    this.armor = armorNames.join(', ');
    this.armorClass = 10 + this.abilities.dexterity.modifier + naturalArmor + armor;
  }

  static async fromProto(itemService: ItemService, proto: MonsterProto): Promise<Monster> {
    const itemsUsed = await Promise.all(proto.getItemsUsedList().map(async (n) => Item.fromString(itemService, n)));
    const itemsCarried = await Promise.all(
      proto.getItemsCarriedList().map(async (n) => Item.fromString(itemService, n))
    );

    return new Monster(
      Common.fromProto(proto.getCommon()),
      Size.fromProto(proto.getSize()),
      MonsterType.fromProto(proto.getType()),
      proto.getTagsList().map((t) => MonsterTag.fromProto(t)),
      Alignment.fromProto(proto.getAlignment()),
      proto.getNaturalArmor(),
      Abilities.fromProto(proto.getAbilities()),
      Abilities.convertType(proto.getSpellcastingAbility()),
      proto.getHitDiceNumber(),
      proto.getSpeedList().map((s) => Speed.fromProto(s)),
      proto.getSavingThrowsList().map((s) => Abilities.convertType(s)),
      proto.getProficientSkillsList().map((s) => Skills.convertSkill(s)),
      proto.getDoubleProficientSkillsList().map((s) => Skills.convertSkill(s)),
      proto.getDamageImmunitiesList().map((d) => Damage.convertType(d)),
      proto.getConditionImmunitiesList().map((d) => Condition.convertType(d)),
      Senses.fromProto(proto.getSenses()),
      Languages.fromProto(proto.getLanguages()),
      Rational.fromProto(proto.getChallenge()),
      itemsUsed,
      itemsCarried,
      proto.getItemsRemovedList().map((i) => i.toLowerCase()),
      proto.getTraitsList().map((t) => Trait.fromProto(t)),
      proto.getAttacksList().map((a) => Attack.fromProto(a)),
      proto.getActionsList().map((a) => Action.fromProto(a)),
      proto.getReactionsList().map((a) => Action.fromProto(a)),
      proto.getLegendary()?.getDescription() || '',
      proto
        .getLegendary()
        ?.getActionsList()
        .map((a) => Action.fromProto(a)) || []
    );
  }

  static async fromString(monsterService: MonsterService, name: string): Promise<Monster> {
    const match = name.match(PATTERN_NAME);
    if (match && (match[2] || match[3])) {
      return Monster.createFromValues(
        match[1],
        monsterService,
        match[2] ? match[2].split(/\s*,\s*/) : [],
        Entity.splitValues(match[3])
      );
    } else {
      return monsterService.get(name);
    }
  }

  static create(name: string, bases: string[] = []): Monster {
    return new Monster(
      new Common(name + (bases.length ? '' : ' (not found)'), bases, '', '', [], REFERENCES_EMPTY, []),
      Size.UNKNOWN,
      MonsterType.UNKNOWN,
      [],
      Alignment.UNKNOWN,
      0,
      ABILITIES_EMPTY,
      AbilityType.unknown,
      0,
      [],
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
      [],
      [],
      [],
      [],
      [],
      '',
      []
    );
  }

  static async createFromValues(
    name: string,
    monsterService: MonsterService,
    baseNames: string[],
    values: Map<string, string>
  ): Promise<Monster> {
    let monster;
    if (await monsterService.has(name)) {
      monster = await monsterService.get(name);
    } else {
      monster = Monster.create(name, baseNames);
    }

    const bases: Monster[] = [];
    for (const baseName of baseNames) {
      bases.push(await monsterService.get(baseName));
    }

    monster = monster.resolve(bases, values);
    return monster;
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

  static async collectRaces(monsterService: MonsterService, name: string, bases: string[] = []): Promise<string[]> {
    const monster = await monsterService.get(name);
    const races: string[] = [name];

    for (const base of monster.common.bases) {
      races.push(...(await this.collectRaces(monsterService, base)));
    }

    for (const base of bases) {
      races.push(...(await this.collectRaces(monsterService, base)));
    }

    return races;
  }

  resolve(bases: Monster[], values: Map<string, string>): Monster {
    if (bases.length === 0) {
      return this;
    }

    return new Monster(
      this.common.resolve(
        bases.map((b) => b.common),
        values
      ),
      this.size.resolve(bases.map((m) => m.size)),
      this.type.resolve(bases.map((m) => m.type)),
      Resolve.dedupe(
        this.tags,
        bases.map((m) => m.tags)
      ),
      Entity.maybeOverride(
        values,
        'alignment',
        Alignment.fromString,
        this.alignment.resolve(bases.map((m) => m.alignment))
      ),
      Resolve.max(
        this.naturalArmor,
        bases.map((m) => m.naturalArmor)
      ),
      this.abilities.resolve(
        bases.map((m) => m.abilities),
        values
      ),
      Resolve.firstDefined(
        this.spellcastingAbility,
        bases.map((m) => m.spellcastingAbility)
      ),
      Resolve.max(
        this.hitDiceNumber,
        bases.map((m) => m.hitDiceNumber)
      ),
      Speed.resolve(
        this.speeds,
        bases.map((m) => m.speeds)
      ),
      Resolve.dedupe(
        this.savingThrowTypes,
        bases.map((m) => m.savingThrowTypes)
      ),
      Entity.maybeOverride(
        values,
        'skills',
        Skills.namesFromString,
        Resolve.dedupe(
          this.proficientSkills,
          bases.map((m) => m.proficientSkills)
        )
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
      Entity.maybeOverride(
        values,
        'languages',
        Languages.fromString,
        this.languages.resolve(bases.map((m) => m.languages))
      ),
      Resolve.maxRational(
        this.challenge,
        bases.map((m) => m.challenge)
      ),
      Resolve.dedupe(
        this.itemsUsed,
        bases.map((m) => m.itemsUsed)
      ),
      Resolve.dedupe(
        this.itemsCarried,
        bases.map((m) => m.itemsCarried)
      ),
      this.itemsRemoved,
      Resolve.dedupe(
        this.traits,
        bases.map((m) => m.traits)
      ),
      [...this.unmodifiedAttacks, ...bases.flatMap((m) => m.unmodifiedAttacks)],
      [...this.actions, ...bases.flatMap((m) => m.actions)],
      [...this.reactions, ...bases.flatMap((m) => m.reactions)],
      Resolve.firstDefined(
        this.legendaryDescription,
        bases.map((m) => m.legendaryDescription)
      ),
      [...this.legendaryActions, ...bases.flatMap((m) => m.legendaryActions)]
    );
  }
}
