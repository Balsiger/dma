import { ItemProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class AttunementTarget extends Enum<AttunementTarget> {
  static readonly categories: AttunementTarget[] = [];

  static readonly UNKNOWN = new AttunementTarget('Unknown', ItemProto.AttunementTarget.UNKNOWN);
  static readonly DWARF = new AttunementTarget('Dwarf', ItemProto.AttunementTarget.DWARF);
  static readonly BATTLEAXE = new AttunementTarget(
    'Creature Attuned to a Belt of Dwarvenkind',
    ItemProto.AttunementTarget.BELT_OF_DWARVENKIND,
  );
  static readonly SPELLCASTER = new AttunementTarget('Spellcaster', ItemProto.AttunementTarget.SPELLCASTER);
  static readonly WEAPONS_CHOIS = new AttunementTarget(
    "Creature of the Weapon's Choice",
    ItemProto.AttunementTarget.WEAPONS_CHOICE,
  );

  constructor(name: string, proto: number) {
    super(name, proto);
    AttunementTarget.categories.push(this);
  }

  resolve(bases: AttunementTarget[]): AttunementTarget {
    if (this !== AttunementTarget.UNKNOWN) {
      return this;
    }

    return bases.find((b) => b !== AttunementTarget.UNKNOWN) || this;
  }

  static fromString(text: string): AttunementTarget {
    return Enum.fromStringValue(text, AttunementTarget.categories, AttunementTarget.UNKNOWN);
  }

  static fromProto(proto: number | undefined): AttunementTarget {
    return Enum.fromProtoValue(proto, AttunementTarget.categories, AttunementTarget.UNKNOWN);
  }
}
