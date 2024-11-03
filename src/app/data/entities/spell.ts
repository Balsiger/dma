import { SpellProto } from '../../proto/generated/template_pb';
import { Entity } from './entity';
import { Common } from './values/common';
import { EMPTY as DURATION_EMPTY, Duration } from './values/duration';
import { School } from './values/enums/school';
import { SpellClass } from './values/enums/spell-class';
import { EMPTY as SPELL_DURATION_EMPTY, SpellDuration } from './values/spell-duration';
import { EMPTY as SPELL_RANGE_EMPTY, SpellRange } from './values/spell-range';

/** A representation of a spell. */
export class Spell extends Entity<Spell> {
  constructor(
    common: Common,
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
    super(common);
  }

  static fromProto(proto: SpellProto, productName: string, productId: string): Spell {
    return new Spell(
      Common.fromProto(proto.getCommon(), productName, productId),
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
      proto.getSoundsList(),
    );
  }

  static create(name: string): Spell {
    return new Spell(
      Common.create(name),
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
}
