import { EMPTY as DURATION_EMPTY } from '../data/duration';
import { SpellProto } from '../proto/generated/template_pb';
import { RangeProto, ReferenceProto, SpellClass as SpellClassProto } from '../proto/generated/value_pb';
import { Distance, EMPTY as DISTANCE_EMPTY } from './distance';
import { Duration } from './duration';

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

    parts.push(this.time.toString());
    if (this.instantaneous) {
      parts.push('instantaneous');
    }
    if (this.concentration) {
      parts.push('concentration');
    }
    if (this.dispelled) {
      parts.push('dispelled');
    }
    if (this.triggered) {
      parts.push('triggered');
    }

    const text = parts.filter((d) => !!d).join(' or ');
    if (this.instantaneous || this.concentration || this.dispelled || this.triggered) {
      return 'Until ' + text;
    }

    return text;
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
  private readonly formatted: string;

  constructor(readonly distanace: Distance, readonly self: boolean, readonly touch: boolean, readonly shape: Shape) {
    this.formatted = this.asString();
  }

  toString(): string {
    return this.formatted;
  }

  asString(): string {
    const parts: string[] = [];
    parts.push(this.distanace.toString());
    if (this.self) {
      parts.push('Self');
    }
    if (this.touch) {
      parts.push('Touch');
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

export const SPELL_RANGE_EMPTY = new SpellRange(DISTANCE_EMPTY, false, false, Shape.unknown);

export class Spell {
  constructor(
    readonly name: string,
    readonly level: number,
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
    readonly description: string,
    readonly shortDescription: string,
    readonly higherLevels: string,
    readonly references: string
  ) {}

  static fromProto(proto: SpellProto): Spell {
    return new Spell(
      proto.getCommon()?.getName() || '<none>',
      proto.getLevel(),
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
      proto.getCommon()?.getDescription() || '',
      proto.getCommon()?.getShortDescription() || '',
      proto.getHigherLevels(),
      Spell.convertReferenecs(proto.getCommon()?.getReferencesList())
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
      name,
      -1,
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
      '',
      '',
      ''
    );
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

      case SpellClassProto.WIZARD:
        return SpellClass.wizard;

      default:
        return SpellClass.unknown;
    }
  }
}
