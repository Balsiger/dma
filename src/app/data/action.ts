import { MonsterProto } from '../proto/generated/template_pb';

export class Action {
  constructor(readonly name: string, readonly description: string) {}

  static fromProto(proto: MonsterProto.Action | undefined): Action {
    if (!proto) {
      return EMPTY;
    }

    return new Action(proto.getName(), proto.getDescription());
  }
}

const EMPTY = new Action('', '');
