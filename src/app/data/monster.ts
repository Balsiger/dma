import { MonsterProto } from '../proto/generated/template_pb';
import { References } from './references';
import { Size } from './size';

export class Monster {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly shortDescription: string,
    readonly references: References,
    readonly size: Size
  ) {}

  static fromProto(proto: MonsterProto): Monster {
    return new Monster(
      proto.getCommon()?.getName() || '<none>',
      proto.getCommon()?.getDescription() || '',
      proto.getCommon()?.getShortDescription() || '',
      References.fromProto(proto.getCommon()?.getReferencesList()),
      Size.fromProto(proto.getSize())
    );
  }

  static create(name: string): Monster {
    return new Monster(name + ' (not found)', '', '', new References([]), Size.UNKNOWN);
  }
}
