import { MonsterProto } from '../../proto/generated/template_pb';
import { Resolve } from '../resolve';

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
  thievesCant = "Thieve's Cant",
  drownSignLanguage = 'Drow Sign Language',
  undercommon = 'Undercommon',
  terran = 'Terran',
  troglodyte = 'Troglodyte',
  grell = 'Grell',
  slaad = 'Slaad',
}

export class Languages {
  readonly text: string;

  constructor(readonly names: Name[], readonly special: string = '') {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  resolve(other: Languages[]): Languages {
    if (this.names.length > 0) {
      this;
    }

    return new Languages(
      Resolve.dedupe(
        [],
        other.map((l) => l.names)
      ),
      other
        .map((l) => l.special)
        .filter((l) => !!l)
        .join(' ')
    );
  }

  private asString(): string {
    if (this.special) {
      if (this.names.length) {
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

  static fromString(text: string): Languages {
    const parts = text.split(/\|/);
    const names: Name[] = [];
    for (const part of parts) {
      names.push(Languages.nameFromString(part));
    }

    return new Languages(names);
  }

  private static nameFromString(text: string): Name {
    for (const value in Name) {
      const name = Name[value as keyof typeof Name];
      if (name.toLowerCase() === text.toLowerCase()) {
        return name;
      }
    }

    return Name.unknown;
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
      case MonsterProto.Languages.Name.THIEVES_CANT:
        return Name.thievesCant;
      case MonsterProto.Languages.Name.DROW_SIGN_LANGUAGE:
        return Name.drownSignLanguage;
      case MonsterProto.Languages.Name.TERRAN:
        return Name.terran;
      case MonsterProto.Languages.Name.TROGLODYTE:
        return Name.troglodyte;
      case MonsterProto.Languages.Name.GRELL:
        return Name.grell;
      case MonsterProto.Languages.Name.SLAAD:
        return Name.slaad;

      default:
        return Name.unknown;
    }
  }
}

export const EMPTY = new Languages([], '');
