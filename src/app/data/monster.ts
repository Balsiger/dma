import { MonsterProto } from '../proto/generated/template_pb';

export class Monster {
  constructor(readonly name: string) {}

  static fromProto(proto: MonsterProto): Monster {
    return new Monster(proto.getCommon()?.getName() || '<none>');
  }
}
