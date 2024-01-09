import { SpellProto } from '../proto/generated/template_pb';
import { RangeProto, ReferenceProto, SpellClass as SpellClassProto } from '../proto/generated/value_pb';
import { Common, Entity } from './entities/entity';
import { EMPTY as DISTANCE_EMPTY, Distance } from './values/distance';
import { EMPTY as DURATION_EMPTY, Duration } from './values/duration';

export enum School {
  unknown = 'unknown',
  abjuration = 'abjuration',
  conjuration = 'conjuration',
  divination = 'divination',
  enchantment = 'enchantment',
  evoation = 'evoation',
  illusion = 'illusion',
  necromancy = 'necromancy',
  transmutation = 'transmutation',
}

export enum SpellClass {
  unknown = 'unknown',
  bard = 'bard',
  cleric = 'cleric',
  druid = 'druid',
  paladin = 'paladin',
  ranger = 'ranger',
  sorcerer = 'sorcerer',
  warlock = 'warlock',
  wizard = 'wizard',
}

export class SpellDuration {
  private readonly formatted: string;

  constructor(
    readonly time: Duration,
    readonly instantaneous: boolean,
    readonly concentration: boolean,
    readonly dispelled: boolean,
    readonly triggered: boolean
  ) {
    this.formatted = this.asString();
  }

  toString(): string {
    return this.formatted;
  }

  asString(): string {
    const parts: string[] = [];

    if (this.instantaneous) {
      parts.push('Instantaneous');
    }
    if (this.concentration) {
      parts.push('Concentration');
    }
    if (this.dispelled) {
      parts.push('Dispelled');
    }
    if (this.triggered) {
      parts.push('Triggered');
    }

    if (parts.length) {
      return parts.join(' or ') + ', up to ' + this.time.toString();
    } else {
      return this.time.toString();
    }
  }

  static fromProto(proto: SpellProto.Duration | undefined): SpellDuration {
    if (!proto) {
      return SPELL_DURATION_EMPTY;
    }

    return new SpellDuration(
      Duration.fromProto(proto.getTime()),
      proto.getInstantaneous(),
      proto.getConcentration(),
      proto.getDispelled(),
      proto.getTriggered()
    );
  }
}

const SPELL_DURATION_EMPTY: SpellDuration = new SpellDuration(DURATION_EMPTY, false, false, false, false);

export enum Shape {
  unknown = 'unknown',
  cone = 'cone',
  cube = 'cube',
  cylinder = 'cylinder',
  line = 'line',
  sphere = 'sphere',
}

export class SpellRange {
  private readonly text: string;

  constructor(
    readonly distanace: Distance,
    readonly self: boolean,
    readonly touch: boolean,
    readonly unlimited: boolean,
    readonly shape: Shape
  ) {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  private asString(): string {
    const parts: string[] = [];
    parts.push(this.distanace.toString());
    if (this.self) {
      parts.push('Self');
    }
    if (this.touch) {
      parts.push('Touch');
    }
    if (this.unlimited) {
      parts.push('Unlimited');
    }
    if (this.shape !== Shape.unknown) {
      parts.push(this.shape);
    }

    return parts.filter((d) => !!d).join(' ');
  }

  static fromProto(proto: SpellProto.Range | undefined): SpellRange {
    if (!proto) {
      return SPELL_RANGE_EMPTY;
    }

    return new SpellRange(
      Distance.fromProto(proto.getDistance()),
      proto.getSelf(),
      proto.getTouch(),
      proto.getUnlimited(),
      SpellRange.convertShape(proto.getShape())
    );
  }

  private static convertShape(shape: number): Shape {
    switch (shape) {
      case SpellProto.Range.Shape.CONE:
        return Shape.cone;
      case SpellProto.Range.Shape.CUBE:
        return Shape.cube;
      case SpellProto.Range.Shape.CYLINDER:
        return Shape.cylinder;
      case SpellProto.Range.Shape.LINE:
        return Shape.line;
      case SpellProto.Range.Shape.SPHERE:
        return Shape.sphere;

      default:
        return Shape.unknown;
    }
  }
}

export const SPELL_RANGE_EMPTY = new SpellRange(DISTANCE_EMPTY, false, false, false, Shape.unknown);

export class Spell extends Entity<Spell> {
  constructor(
    common: Common,
    readonly level: number,
    readonly ritual: boolean,
    readonly school: string,
    readonly classes: string[],
    readonly castingTime: Duration,
    readonly duration: SpellDuration,
    readonly range: SpellRange,
    readonly target: string,
    readonly component_verbose: boolean,
    readonly component_somatic: boolean,
    readonly component_material: boolean,
    readonly materials: string[],
    readonly higherLevels: string,
    readonly sounds: string[]
  ) {
    super(common);
  }

  static fromProto(proto: SpellProto): Spell {
    return new Spell(
      Common.fromProto(proto.getCommon()),
      proto.getLevel(),
      proto.getRitual(),
      Spell.convertSchool(proto.getSchool()),
      proto.getSpellClassList().map(Spell.convertSpellClass),
      Duration.fromProto(proto.getCastingTime()),
      SpellDuration.fromProto(proto.getDuration()),
      SpellRange.fromProto(proto.getRange()),
      proto.getTarget(),
      proto.getComponentVerbose(),
      proto.getComponentSomatic(),
      proto.getComponentMaterial(),
      proto.getMaterialList(),
      proto.getHigherLevels(),
      proto.getSoundsList()
    );
  }

  private static convertReferenecs(references: ReferenceProto[] | undefined): string {
    if (!references) {
      return '';
    }

    return references.map((r) => Spell.convertReference(r)).join(', ');
  }

  private static convertReference(reference: ReferenceProto): string {
    return reference.getName() + ' ' + Spell.convertPages(reference.getPagesList());
  }

  private static convertPages(pages: RangeProto[]): string {
    return pages.map((p) => Spell.convertPage(p)).join('/');
  }

  private static convertPage(page: RangeProto): string {
    if (page.getHigh() === page.getLow()) {
      return '' + page.getHigh();
    }

    return page.getLow() + '-' + page.getHigh();
  }

  static create(name: string): Spell {
    return new Spell(
      Common.create(name + ' (not found)'),
      -1,
      false,
      School.unknown,
      [],
      DURATION_EMPTY,
      SPELL_DURATION_EMPTY,
      SPELL_RANGE_EMPTY,
      '',
      false,
      false,
      false,
      [],
      '',
      []
    );
  }

  resolve(bases: Spell[]): Spell {
    return this;
  }

  private static convertSchool(school: number): School {
    switch (school) {
      case SpellProto.School.ABJURATION:
        return School.abjuration;

      case SpellProto.School.CONJURATION:
        return School.conjuration;

      case SpellProto.School.DIVINATION:
        return School.divination;

      case SpellProto.School.ENCHANTMENT:
        return School.enchantment;

      case SpellProto.School.EVOCATION:
        return School.evoation;

      case SpellProto.School.ILLUSION:
        return School.illusion;

      case SpellProto.School.NECROMANCY:
        return School.necromancy;

      case SpellProto.School.TRANSMUTATION:
        return School.transmutation;

      default:
        return School.unknown;
    }
  }

  private static convertSpellClass(spellClass: number): SpellClass {
    switch (spellClass) {
      case SpellClassProto.BARD:
        return SpellClass.bard;

      case SpellClassProto.CLERIC:
        return SpellClass.cleric;

      case SpellClassProto.DRUID:
        return SpellClass.druid;

      case SpellClassProto.PALADIN:
        return SpellClass.paladin;

      case SpellClassProto.RANGER:
        return SpellClass.ranger;

      case SpellClassProto.SORCERER:
        return SpellClass.sorcerer;

      case SpellClassProto.WARLOCK:
        return SpellClass.warlock;

      case SpellClassProto.WIZARD:
        return SpellClass.wizard;

      default:
        return SpellClass.unknown;
    }
  }
}
