import { ToolProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';
import { AbilityType } from './enums/ability-type';

export class ToolUtilize {
  constructor(
    readonly task: string,
    readonly dc: number,
  ) {}

  static fromProto(proto: ToolProto.Utilize | undefined): ToolUtilize {
    if (!proto || !proto.getTask()) {
      return new ToolUtilize('', 0);
    }

    return new ToolUtilize(proto.getTask(), proto.getDc());
  }

  toString(): string {
    return `${this.task} (DC ${this.dc})`;
  }
}

export class Tool {
  constructor(
    readonly ability: AbilityType,
    readonly utilizes: ToolUtilize[],
    readonly craftItems: string[],
  ) {}

  resolve(bases: Tool[]): Tool {
    if (!bases.length) {
      return this;
    }

    return new Tool(
      Resolve.firstDefined(
        this.ability,
        bases.map((a) => a.ability),
      ),
      Resolve.dedupe(
        this.utilizes,
        bases.map((a) => a.utilizes),
      ),
      Resolve.dedupe(
        this.craftItems,
        bases.map((a) => a.craftItems),
      ),
    );
  }

  static fromProto(proto: ToolProto | undefined): Tool | undefined {
    if (!proto || !proto.getAbility()) {
      return undefined;
    }

    return new Tool(
      AbilityType.fromProto(proto.getAbility()),
      proto
        .getUtilizesList()
        .map((u) => ToolUtilize.fromProto(u))
        .filter((u) => !!u),
      proto.getCraftItemsList(),
    );
  }
}

export const EMPTY = new Tool(AbilityType.UNKNOWN, [], []);
