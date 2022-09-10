import { MonsterProto } from '../proto/generated/template_pb';

export enum Name {
  unknown = 'Unknown',
  common = 'Common',
  dwarvish = 'Dwarvish',
  elvish = 'Elvish',
  giant = 'Giant',
  gnomish = 'Gnomish',
  goblin = 'Goblin',
  halfling = 'Halfing',
  orc = 'Orc',
  abyssal = 'Abyssal',
  celestial = 'Celestial',
  draconic = 'Draconic',
  deepSpeech = 'Deep Speech',
  infernal = 'Infernal',
  promordial = 'Primordial',
  sylvan = 'Sylvan',
  undercommon = 'Undercommon',
}

export class Languages {
  readonly text: string;

  constructor(readonly names: Name[], readonly special: string = '') {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  private asString(): string {
    if (this.special) {
      if (this.names) {
        return this.names.join(', ') + '; ' + this.special;
      } else {
        return this.special;
      }
    } else {
      return this.names.join(', ');
    }
  }

  static fromProto(proto: MonsterProto.Languages | undefined): Languages {
    if (!proto) {
      return EMPTY;
    }

    return new Languages(
      proto.getNamesList().map((n) => Languages.convertName(n)),
      proto.getSpecial()
    );
  }

  private static convertName(proto: number): Name {
    switch (proto) {
      case MonsterProto.Languages.Name.COMMON:
        return Name.common;
      case MonsterProto.Languages.Name.DWARVISH:
        return Name.dwarvish;
      case MonsterProto.Languages.Name.ELVISH:
        return Name.elvish;
      case MonsterProto.Languages.Name.GIANT:
        return Name.giant;
      case MonsterProto.Languages.Name.GNOMISH:
        return Name.gnomish;
      case MonsterProto.Languages.Name.GOBLIN:
        return Name.goblin;
      case MonsterProto.Languages.Name.HALFLING:
        return Name.halfling;
      case MonsterProto.Languages.Name.ORC:
        return Name.orc;
      case MonsterProto.Languages.Name.ABYSSAL:
        return Name.abyssal;
      case MonsterProto.Languages.Name.CELESTIAL:
        return Name.celestial;
      case MonsterProto.Languages.Name.DRACONIC:
        return Name.draconic;
      case MonsterProto.Languages.Name.DEEP_SPEECH:
        return Name.deepSpeech;
      case MonsterProto.Languages.Name.INFERNAL:
        return Name.infernal;
      case MonsterProto.Languages.Name.PRIMORDIAL:
        return Name.promordial;
      case MonsterProto.Languages.Name.SYLVAN:
        return Name.sylvan;
      case MonsterProto.Languages.Name.UNDERCOMMON:
        return Name.undercommon;

      default:
        return Name.unknown;
    }
  }
}

export const EMPTY = new Languages([], '');
