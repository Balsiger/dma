import { MonsterProto } from '../../../proto/generated/template_pb';
import { AbilityType } from './enums/ability-type';

export class Action {
  constructor(
    readonly name: string,
    readonly perDay: number,
    readonly description: string,
    readonly save: AbilityType,
    readonly saveDC: number,
    readonly condition: string,
    readonly failure: string,
    readonly success: string,
    readonly failureOrSuccess: string,
  ) {}

  static fromProto(proto: MonsterProto.Action | undefined): Action {
    if (!proto) {
      return EMPTY;
    }

    return new Action(
      proto.getName(),
      proto.getPerDay(),
      proto.getDescription(),
      AbilityType.fromProto(proto.getSave()),
      proto.getSaveDc(),
      proto.getCondition(),
      proto.getFailure(),
      proto.getSuccess(),
      proto.getFailureOrSuccess(),
    );
  }
}

const EMPTY = new Action('', 0, '', AbilityType.UNKNOWN, 0, '', '', '', '');
