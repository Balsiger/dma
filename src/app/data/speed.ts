import { SpeedProto } from '../proto/generated/value_pb';

export enum SpeedMode {
  unknown = 'unknown',
  burrow = 'burrow',
  climb = 'climb',
  fly = 'fly',
  swim = 'swim',
  run = 'run',
}

export class Speed {
  constructor(readonly mode: SpeedMode, readonly feet: number, readonly hover = false) {}

  toString(): string {
    const hover = this.hover ? ` (hover)` : '';

    if (this.mode === SpeedMode.run) {
      return `${this.feet} ft.${hover}`;
    }

    return `${this.mode} ${this.feet} ft.${hover}`;
  }

  static fromProto(proto: SpeedProto | undefined): Speed {
    if (!proto) {
      return EMPTY;
    }

    return new Speed(Speed.convertType(proto.getMode()), proto.getFeet(), proto.getHover());
  }

  private static convertType(mode: number): SpeedMode {
    switch (mode) {
      case SpeedProto.Mode.BURROW:
        return SpeedMode.burrow;
      case SpeedProto.Mode.CLIMB:
        return SpeedMode.climb;
      case SpeedProto.Mode.FLY:
        return SpeedMode.fly;
      case SpeedProto.Mode.SWIM:
        return SpeedMode.swim;
      case SpeedProto.Mode.RUN:
        return SpeedMode.run;

      default:
        return SpeedMode.unknown;
    }
  }

  static resolve(base: Speed[], other: Speed[][]): Speed[] {
    if (base.length > 0) {
      return base;
    }

    const results = new Map<SpeedMode, Speed>();

    for (const speeds of other) {
      for (const speed of speeds) {
        if (!results.has(speed.mode) || results.get(speed.mode)!.feet < speed.feet) {
          results.set(speed.mode, speed);
        }
      }
    }

    return Array.from(results.values());
  }
}

export const EMPTY = new Speed(SpeedMode.unknown, 0);
