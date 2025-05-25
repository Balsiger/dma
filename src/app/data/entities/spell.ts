import { SpellProto } from '../../proto/generated/template_pb';
import { Entity, EntityType } from './entity';
import { Common } from './values/common';
import { EMPTY as DURATION_EMPTY, Duration } from './values/duration';
import { School } from './values/enums/school';
import { SpellClass } from './values/enums/spell-class';
import { EMPTY as SPELL_DURATION_EMPTY, SpellDuration } from './values/spell-duration';
import { EMPTY as SPELL_RANGE_EMPTY, SpellRange } from './values/spell-range';

const DEFAULT_SOUNDS_PER_LEVEL = [
  'elements/415540',
  'elements/415541',
  'elements/415542',
  'elements/415543',
  'elements/415544',
  'elements/415545',
  'elements/415546',
  'elements/415547',
  'elements/415548',
  'elements/415549',
];

/** A representation of a spell. */
export class Spell extends Entity<Spell> {
  readonly components: string;

  constructor(
    common: Common,
    product: string,
    readonly level: number,
    readonly ritual: boolean,
    readonly school: School,
    readonly classes: SpellClass[],
    readonly castingTime: Duration,
    readonly duration: SpellDuration,
    readonly range: SpellRange,
    readonly target: string,
    readonly component_verbose: boolean,
    readonly component_somatic: boolean,
    readonly component_material: boolean,
    readonly materials: string[],
    readonly higherLevels: string,
    readonly sounds: string[],
  ) {
    super(common, product);

    this.components = this.computeComponents();
  }

  static fromProto(proto: SpellProto, productName: string, productId: string): Spell {
    return new Spell(
      Common.fromProto(proto.getCommon(), productName, productId, EntityType.spell),
      productName,
      proto.getLevel(),
      proto.getRitual(),
      School.fromProto(proto.getSchool()),
      proto.getSpellClassList().map((p) => SpellClass.fromProto(p)),
      Duration.fromProto(proto.getCastingTime()),
      SpellDuration.fromProto(proto.getDuration()),
      SpellRange.fromProto(proto.getRange()),
      proto.getTarget(),
      proto.getComponentVerbose(),
      proto.getComponentSomatic(),
      proto.getComponentMaterial(),
      proto.getMaterialList(),
      proto.getHigherLevels(),
      proto.getSoundsList.length > 0 ? proto.getSoundsList() : Spell.defaultSounds(proto.getLevel()),
    );
  }

  static create(name: string): Spell {
    return new Spell(
      Common.create(name, EntityType.spell),
      '',
      -1,
      false,
      School.UNKNOWN,
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
      [],
    );
  }

  resolve(bases: Spell[]): Spell {
    return this;
  }

  override matches(selections: Map<string, any>): boolean {
    if (!super.matches(selections)) {
      return false;
    }

    for (const [label, value] of selections.entries()) {
      if (label === 'Level' && !Entity.includes(this.level, value)) {
        return false;
      }

      if (label === 'Ritual' && this.ritual !== value) {
        return false;
      }

      if (label === 'School' && !Entity.includes(this.school, value)) {
        return false;
      }

      if (label === 'Class' && !Entity.includesAny(this.classes, value)) {
        return false;
      }
    }

    return true;
  }

  private computeComponents(): string {
    const components = [];
    if (this.component_verbose) {
      components.push('V');
    }

    if (this.component_somatic) {
      components.push('S');
    }

    if (this.component_material) {
      components.push('M');
    }

    return components.join(', ');
  }

  private static defaultSounds(level: number): string[] {
    const url = DEFAULT_SOUNDS_PER_LEVEL[level];
    switch (level) {
      case 0:
        return [`Cantrip [${url}]`];
      case 1:
        return [`1st [${url}]`];
      case 2:
        return [`2nd [${url}]`];
      case 3:
        return [`3rd [${url}]`];
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        return [`${level}th [${url}]`];

      default:
        return [];
    }
  }
}
