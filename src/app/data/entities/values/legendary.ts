import { MonsterProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';
import { Action } from './action';

export class Legendary {
  constructor(
    readonly description: string,
    readonly uses: number,
    readonly lairUses: number,
    readonly actions: Action[],
  ) {}

  static fromProto(proto: MonsterProto.Legendary | undefined): Legendary {
    if (!proto) {
      return EMPTY;
    }

    return new Legendary(
      proto.getDescription(),
      proto.getUses(),
      proto.getLairUses(),
      proto.getActionsList().map((p) => Action.fromProto(p)),
    );
  }

  resolve(bases: Legendary[]): Legendary {
    if (!this.uses && !this.description) {
      return this;
    }

    return Resolve.firstDefined(this, bases, (v) => v.uses > 0 || !!v.description);
  }
}

export const EMPTY = new Legendary('', 0, 0, []);
