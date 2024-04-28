import { MonsterProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';
import { LanguageName } from './enums/language-name';

export class Languages {
  readonly text: string;

  constructor(
    readonly names: LanguageName[],
    readonly special: string = '',
    readonly telepathyFeet: number = 0,
  ) {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  resolve(other: Languages[]): Languages {
    if (this.names.length > 0 || this.special || this.telepathyFeet) {
      return this;
    }

    return new Languages(
      Resolve.dedupe(
        [],
        other.map((l) => l.names),
      ),
      other
        .map((l) => l.special)
        .filter((l) => !!l)
        .join(' '),
      Resolve.max(
        this.telepathyFeet,
        other.map((l) => l.telepathyFeet).filter((l) => l > 0),
      ),
    );
  }

  private asString(): string {
    const parts: string[] = [];

    if (this.names.length) {
      parts.push(this.names.join(', '));
    }

    if (this.telepathyFeet > 0) {
      parts.push(`Telepathy ${this.telepathyFeet} ft.`);
    }

    if (this.special) {
      parts.push(this.special);
    }

    return parts.join('; ');
  }

  static fromProto(proto: MonsterProto.Languages | undefined): Languages {
    if (!proto) {
      return EMPTY;
    }

    return new Languages(
      proto.getNamesList().map((n) => LanguageName.fromProto(n)),
      proto.getSpecial(),
      proto.getTelepathyFeet(),
    );
  }

  static fromString(text: string): Languages {
    const parts = text.split(/\|/);
    const names: LanguageName[] = [];
    for (const part of parts) {
      names.push(LanguageName.fromString(part));
    }

    return new Languages(names);
  }
}

export const EMPTY = new Languages([], '');
