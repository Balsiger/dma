import { MonsterProto } from '../../../proto/generated/template_pb';
import { AbilityType } from './enums/ability-type';
import { Recharge } from './enums/recharge';

export class Action {
  readonly subtitle: string = this.formatSubtitle();

  constructor(
    readonly name: string,
    readonly tag: string,
    readonly perDay: number,
    readonly recharge: Recharge,
    readonly description: string,
    readonly save: AbilityType,
    readonly saveDC: number,
    readonly saveDescription: string,
    readonly trigger: string,
    readonly response: string,
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
      proto.getTag(),
      proto.getPerDay(),
      Recharge.fromProto(proto.getRecharge()),
      proto.getDescription(),
      AbilityType.fromProto(proto.getSave()),
      proto.getSaveDc(),
      proto.getSaveDescription(),
      proto.getTrigger(),
      proto.getResponse(),
      proto.getCondition(),
      proto.getFailure(),
      proto.getSuccess(),
      proto.getFailureOrSuccess(),
    );
  }

  private formatSubtitle(): string {
    const parts: string[] = [];

    if (this.tag) {
      parts.push(this.tag);
    }

    if (this.perDay) {
      parts.push(`${this.perDay}/Day`);
    }

    if (this.recharge !== Recharge.UNKNOWN) {
      switch (this.recharge) {
        case Recharge.LONG_REST:
        case Recharge.SHORT_REST:
          parts.push(`Recharges after a ${this.recharge}`);
          break;

        default:
          parts.push(`Recharge ${this.recharge}`);
          break;
      }
    }

    return parts.join('; ');
  }
}

export const EMPTY = new Action('', '', 0, Recharge.UNKNOWN, '', AbilityType.UNKNOWN, 0, '', '', '', '', '', '', '');
