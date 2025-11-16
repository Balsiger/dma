import { ArmorProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';
import { ArmorType } from './enums/armor_type';

export class Armor {
  readonly subTitles: string[] = [];

  constructor(
    readonly type: ArmorType,
    readonly ac: number,
    readonly maxDexterity: number,
    readonly minStrength: number,
    readonly stealthDisadvantage: boolean,
  ) {
    if (type !== ArmorType.UNKNOWN) {
      this.subTitles.push(type.name);
    }
  }

  resolve(bases: Armor[]): Armor {
    if (!bases.length) {
      return this;
    }

    return new Armor(
      Resolve.firstDefined(
        this.type,
        bases.map((a) => a.type),
        (v) => v !== ArmorType.UNKNOWN,
      ),
      Resolve.sum(
        this.ac,
        bases.map((a) => a.ac),
      ),
      Resolve.min(
        this.maxDexterity,
        bases.map((a) => a.maxDexterity),
      ),
      Resolve.max(
        this.minStrength,
        bases.map((a) => a.minStrength),
      ),
      Resolve.firstDefined(
        this.stealthDisadvantage,
        bases.map((a) => a.stealthDisadvantage),
      ),
    );
  }

  static fromProto(proto: ArmorProto | undefined): Armor | undefined {
    if (!proto || (proto.getType() === 0 && proto.getAc() === 0)) {
      return undefined;
    }

    return new Armor(
      ArmorType.fromProto(proto.getType()),
      proto.getAc(),
      proto.getMaxDexterity(),
      proto.getMinStrength(),
      proto.getStealthDisadvantage(),
    );
  }
}

export const EMPTY = new Armor(ArmorType.UNKNOWN, 0, 100, 0, false);
