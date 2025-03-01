import { MonsterProto } from '../proto/generated/template_pb';

export class Trait {
  constructor(
    readonly name: string,
    readonly perDay: number,
    readonly description: string,
  ) {}

  static fromProto(proto: MonsterProto.Trait | undefined): Trait {
    if (!proto) {
      return EMPTY;
    }

    return new Trait(proto.getName(), proto.getPerDay(), proto.getDescription());
  }
}

const EMPTY = new Trait('', 0, '');
