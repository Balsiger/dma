import { MonsterProto } from '../../proto/generated/template_pb';
import { ItemService } from '../../services/item.service';
import { MonsterService } from '../../services/monster.service';
import { Resolve } from '../resolve';
import { Skill, Skills } from '../skills';
import { Speed } from '../speed';
import { Trait } from '../trait';
import { EMPTY as RATIONAL_EMPTY, Rational } from '../values/rational';
import { Entity } from './entity';
import { Item } from './item';
import { EMPTY as ABILITIES_EMPTY, Abilities } from './values/ability';
import { Action } from './values/action';
import { Attack, MULTIATTACK_EMPTY, Multiattack } from './values/attack';
import { Common } from './values/common';
import { Dice } from './values/dice';
import { AbilityType } from './values/enums/ability_type';
import { Alignment } from './values/enums/alignment';
import { AttackType } from './values/enums/attack_type';
import { ConditionType } from './values/enums/condition_type';
import { DamageType } from './values/enums/damage_type';
import { MonsterTag, MonsterType } from './values/enums/monster_type';
import { SkillName } from './values/enums/skill_name';
import { ValueType } from './values/enums/value_type';
import { EMPTY as LANGUAGES_EMPTY, Languages } from './values/languages';
import { EMPTY as REFERENCES_EMPTY } from './values/references';
import { EMPTY as SENSES_EMPTY, Senses } from './values/senses';
import { Size } from './values/size';
import { Modifier, ModifierValue, NumberValue } from './values/value';

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
  readonly armorClass: NumberValue;
  readonly hitDice: Dice;
  readonly savingThrows: { ability: string; value: ModifierValue }[];
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
    readonly damageResistances: DamageType[],
    readonly damageVulnerabilities: DamageType[],
    readonly conditionImmunities: ConditionType[],
    readonly senses: Senses,
    readonly languages: Languages,
    readonly challenge: Rational,
    itemsUsedAll: Item[],
    itemsCarriedAll: Item[],
    readonly itemsRemoved: string[],
    readonly traits: Trait[],
    readonly multiattack: Multiattack,
    readonly unmodifiedAttacks: Attack[],
    readonly actions: Action[],
    readonly bonusActions: Action[],
    readonly reactions: Action[],
    readonly legendaryDescription: string,
    readonly legendaryActions: Action[],
  ) {
    super(common);

    this.itemsUsed = itemsUsedAll.filter((i) => itemsRemoved.indexOf(i.name.toLowerCase()) < 0);
    this.itemsCarried = itemsCarriedAll.filter((i) => itemsRemoved.indexOf(i.name.toLowerCase()) < 0);

    let armorNames: string[] = [];
    let maxDex = 100;
    for (const item of this.itemsUsed) {
      if (item.armor) {
        maxDex = Math.min(maxDex, item.armor.maxDexterity);
        armorNames.push(item.name);
      }
    }

    if (maxDex >= 0) {
      this.abilities = unmodifiedAbilities.withAbility(unmodifiedAbilities.dexterity.withMaxModifier(maxDex));
    } else {
      this.abilities = unmodifiedAbilities;
    }

    this.hitDice = new Dice(
      hitDiceNumber,
      this.size.hitDice,
      new ModifierValue(0, this.name, [
        new Modifier<number>(hitDiceNumber * this.abilities.constitution.modifier, 'Constitution'),
      ]),
    );
    this.proficiency = Math.max(1, Math.ceil(challenge.value / 4)) + 1;
    this.skills = new Skills(this.abilities, this.proficiency, proficientSkills, doubleProficientSkills);
    const perceptionSkill = this.skills.getSkill(SkillName.PERCEPTION);
    this.savingThrows = this.savingThrowTypes.map((a) => ({
      ability: a.short,
      value: new ModifierValue(0, this.name, [
        new Modifier<number>(this.proficiency, 'Proficiency'),
        new Modifier<number>(this.abilities.getAbility(a).modifier, a.name),
      ]),
    }));
    this.savingThrows = this.abilities.abilities.map((a) => ({
      ability: a.type.short,
      value: new ModifierValue(0, this.name, [
        new Modifier<number>(this.proficiency, 'Proficiency'),
        new Modifier<number>(a.modifier, a.type.name),
      ]),
    }));
    this.passivePerception = perceptionSkill
      ? 10 + perceptionSkill.modifier.total
      : 10 +
        this.abilities.wisdom.modifier +
        (proficientSkills.indexOf(SkillName.PERCEPTION) >= 0 ? this.proficiency : 0);
    this.xp = Monster.xpPerChallenge(this.challenge);
    this.toHitMelee = this.proficiency + this.abilities.strength.modifier;
    this.toHitRanged = this.proficiency + this.abilities.dexterity.modifier;
    this.toHitSpell = this.proficiency + this.abilities.getAbility(this.spellcastingAbility).modifier;
    this.attacks = unmodifiedAttacks.map((a) =>
      a.with(
        this.name,
        this.proficiency,
        this.abilities.strength.modifier,
        this.abilities.dexterity.modifier,
        this.abilities.intelligence.modifier,
        this.abilities.constitution.modifier,
        this.spellcastingAbility,
        this.abilities.getAbility(this.spellcastingAbility).modifier,
      ),
    );

    for (const item of this.itemsUsed) {
      if (item.weapon) {
        const attack = Attack.fromItem(
          this.name,
          item,
          this.proficiency,
          this.abilities.strength.modifier,
          this.abilities.dexterity.modifier,
          this.size,
        );
        const index = this.attackIndex(item.name);
        if (index < 0) {
          this.attacks.push(attack);
        } else {
          this.attacks[index] = attack;
        }
      }

      if (item.magic) {
        for (const modificator of item.magic.modificators) {
          if (modificator.type === ValueType.SAVE) {
            for (let i = 0; i < this.savingThrows.length; i++) {
              this.savingThrows[i].value = this.savingThrows[i].value.add([
                new Modifier<number>(modificator.value, item.name),
              ]);
            }
          }
        }
      }
    }

    const acModifiers: Modifier<number>[] = [new Modifier<number>(this.abilities.dexterity.modifier, 'Dexterity')];
    if (naturalArmor) {
      acModifiers.push(new Modifier<number>(naturalArmor, 'Natural Armor'));
    }

    for (const item of this.itemsUsed) {
      acModifiers.push(...item.modifiers(ValueType.ARMOR, 'Armor Class'));
    }

    this.armorClass = new NumberValue(10, this.name, acModifiers);
  }

  private attackIndex(name: string): number {
    for (let i = 0; i < this.attacks.length; i++) {
      if (this.attacks[i].name === name) {
        return i;
      }
    }

    return -1;
  }

  static async fromProto(itemService: ItemService, proto: MonsterProto): Promise<Monster> {
    const itemsUsed = await Promise.all(proto.getItemsUsedList().map(async (n) => Item.fromString(itemService, n)));
    const itemsCarried = await Promise.all(
      proto.getItemsCarriedList().map(async (n) => Item.fromString(itemService, n)),
    );

    return new Monster(
      Common.fromProto(proto.getCommon()),
      Size.fromProto(proto.getSize()),
      MonsterType.fromProto(proto.getType()),
      proto.getTagsList().map((t) => MonsterTag.fromProto(t)),
      Alignment.fromProto(proto.getAlignment()),
      proto.getNaturalArmor(),
      Abilities.fromProto(proto.getAbilities()),
      AbilityType.fromProto(proto.getSpellcastingAbility()),
      proto.getHitDiceNumber(),
      proto.getSpeedList().map((s) => Speed.fromProto(s)),
      proto.getSavingThrowsList().map((s) => AbilityType.fromProto(s)),
      proto.getProficientSkillsList().map((s) => SkillName.fromProto(s)),
      proto.getDoubleProficientSkillsList().map((s) => SkillName.fromProto(s)),
      proto.getDamageImmunitiesList().map((d) => DamageType.fromProto(d)),
      proto.getDamageResistancesList().map((d) => DamageType.fromProto(d)),
      proto.getDamageVulnerabilitiesList().map((d) => DamageType.fromProto(d)),
      proto.getConditionImmunitiesList().map((d) => ConditionType.fromProto(d)),
      Senses.fromProto(proto.getSenses()),
      Languages.fromProto(proto.getLanguages()),
      Rational.fromProto(proto.getChallenge()),
      itemsUsed,
      itemsCarried,
      proto.getItemsRemovedList().map((i) => i.toLowerCase()),
      proto.getTraitsList().map((t) => Trait.fromProto(t)),
      Multiattack.fromProto(proto.getMultiattack()),
      proto.getAttacksList().map((a) => Attack.fromProto(a)),
      proto.getActionsList().map((a) => Action.fromProto(a)),
      proto.getBonusActionsList().map((a) => Action.fromProto(a)),
      proto.getReactionsList().map((a) => Action.fromProto(a)),
      proto.getLegendary()?.getDescription() || '',
      proto
        .getLegendary()
        ?.getActionsList()
        .map((a) => Action.fromProto(a)) || [],
    );
  }

  static async fromString(monsterService: MonsterService, name: string): Promise<Monster> {
    const match = name.match(PATTERN_NAME);
    if (match && (match[2] || match[3])) {
      return Monster.createFromValues(
        match[1],
        monsterService,
        match[2] ? match[2].split(/\s*,\s*/) : [],
        Entity.splitValues(match[3]),
      );
    } else {
      return monsterService.get(name);
    }
  }

  static create(name: string, bases: string[] = []): Monster {
    return new Monster(
      new Common(name + (bases.length ? '' : ' (not found)'), name + 's', bases, [], '', '', [], REFERENCES_EMPTY, []),
      Size.UNKNOWN,
      MonsterType.UNKNOWN,
      [],
      Alignment.UNKNOWN,
      0,
      ABILITIES_EMPTY,
      AbilityType.UNKNOWN,
      0,
      [],
      [],
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
      MULTIATTACK_EMPTY,
      [],
      [],
      [],
      [],
      '',
      [],
    );
  }

  static async createFromValues(
    name: string,
    monsterService: MonsterService,
    baseNames: string[],
    values: Map<string, string>,
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

    return this.xpPerLevel(challenge.leader);
  }

  static xpPerLevel(level: number): number {
    return XP_PER_CHALLENGE[level as keyof typeof XP_PER_CHALLENGE] || 0;
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
        values,
      ),
      this.size.resolve(bases.map((m) => m.size)),
      this.type.resolve(bases.map((m) => m.type)),
      Resolve.dedupe(
        this.tags,
        bases.map((m) => m.tags),
      ),
      Entity.maybeOverride(
        values,
        'alignment',
        Alignment.fromString,
        this.alignment.resolve(bases.map((m) => m.alignment)),
      ),
      Resolve.max(
        this.naturalArmor,
        bases.map((m) => m.naturalArmor),
      ),
      this.abilities.resolve(
        bases.map((m) => m.abilities),
        values,
      ),
      Resolve.firstDefined(
        this.spellcastingAbility,
        bases.map((m) => m.spellcastingAbility),
      ),
      Resolve.max(
        this.hitDiceNumber,
        bases.map((m) => m.hitDiceNumber),
      ),
      Speed.resolve(
        this.speeds,
        bases.map((m) => m.speeds),
      ),
      Resolve.dedupe(
        this.savingThrowTypes,
        bases.map((m) => m.savingThrowTypes),
      ),
      Entity.maybeOverride(
        values,
        'skills',
        Skills.namesFromString,
        Resolve.dedupe(
          this.proficientSkills,
          bases.map((m) => m.proficientSkills),
        ),
      ),
      Resolve.dedupe(
        this.doubleProficientSkills,
        bases.map((m) => m.doubleProficientSkills),
      ),
      Resolve.dedupe(
        this.damageImmunities,
        bases.map((m) => m.damageImmunities),
      ),
      Resolve.dedupe(
        this.damageResistances,
        bases.map((m) => m.damageResistances),
      ),
      Resolve.dedupe(
        this.damageVulnerabilities,
        bases.map((m) => m.damageVulnerabilities),
      ),
      Resolve.dedupe(
        this.conditionImmunities,
        bases.map((m) => m.conditionImmunities),
      ),
      this.senses.resolve(bases.map((m) => m.senses)),
      Entity.maybeOverride(
        values,
        'languages',
        Languages.fromString,
        this.languages.resolve(bases.map((m) => m.languages)),
      ),
      Resolve.maxRational(
        this.challenge,
        bases.map((m) => m.challenge),
      ),
      Resolve.dedupe(
        this.itemsUsed,
        bases.map((m) => m.itemsUsed),
      ),
      Resolve.dedupe(
        this.itemsCarried,
        bases.map((m) => m.itemsCarried),
      ),
      this.itemsRemoved,
      Resolve.dedupeByKey(
        this.traits,
        bases.map((m) => m.traits),
        (m) => m.name,
        (v) => !!v.description,
      ),
      Resolve.firstDefined(
        this.multiattack,
        bases.map((m) => m.multiattack),
        (m) => m.attacksOr.length > 0,
      ),
      Resolve.dedupeByKey(
        this.unmodifiedAttacks,
        bases.map((m) => m.unmodifiedAttacks),
        (m) => m.name,
        (v) => v.type != AttackType.UNKNOWN,
      ),
      Resolve.dedupeByKey(
        this.actions,
        bases.map((m) => m.actions),
        (v) => v.name,
        (v) => !!v.description,
      ),
      Resolve.dedupeByKey(
        this.bonusActions,
        bases.map((m) => m.bonusActions),
        (v) => v.name,
        (v) => !!v.description,
      ),
      Resolve.dedupeByKey(
        this.reactions,
        bases.map((m) => m.reactions),
        (v) => v.name,
        (v) => !!v.description,
      ),
      Resolve.firstDefined(
        this.legendaryDescription,
        bases.map((m) => m.legendaryDescription),
      ),
      Resolve.dedupeByKey(
        this.legendaryActions,
        bases.map((m) => m.legendaryActions),
        (v) => v.name,
        (v) => !!v.description,
      ),
    );
  }

  override matches(selections: Map<string, any>): boolean {
    if (!super.matches(selections)) {
      return false;
    }

    for (const [label, value] of selections.entries()) {
      if (label === 'Size' && !Entity.includes(this.size, value)) {
        return false;
      }

      if (label === 'Type' && !Entity.includes(this.type, value)) {
        return false;
      }

      if (label === 'CR' && Rational.compare(this.challenge, value) !== 0) {
        return false;
      }

      if (label === 'Hit Dice' && this.hitDiceNumber !== value) {
        return false;
      }
    }

    return true;
  }
}
