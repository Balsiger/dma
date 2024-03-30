import { MagicProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';
import { Modificator } from './modificator';

export class Magic {
  constructor(
    readonly modificators: Modificator[],
    readonly attackOptions: string[],
  ) {}

  public static fromProto(proto: MagicProto | undefined): Magic | undefined {
    if (!proto) {
      return undefined;
    }

    return new Magic(
      proto.getModifierList().map((m) => Modificator.fromProto(m)),
      proto.getAttackOptionsList(),
    );
  }

  resolve(bases: Magic[]): Magic {
    if (!bases.length) {
      return this;
    }

    const modificators = [...this.modificators];
    for (const base of bases) {
      modificators.push(...base.modificators);
    }

    return new Magic(
      modificators,
      Resolve.dedupe(
        this.attackOptions,
        bases.map((b) => b.attackOptions),
      ),
    );
  }
}

export const EMPTY = new Magic([], []);
