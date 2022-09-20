import { ItemProto } from '../../proto/generated/template_pb';
import { Distance, EMPTY as DISTANCE_EMPTY } from '../distance';
import { Material } from './material';

export class Substance {
  readonly text: string;
  readonly empty: boolean;

  constructor(readonly material: Material, readonly thickness: Distance) {
    this.text = this.asString();
    this.empty = this.isEmpty();
  }

  private asString(): string {
    return `${this.thickness.toString()} ${this.material}`;
  }

  private isEmpty(): boolean {
    return this.thickness.empty && this.material === Material.UNKNOWN;
  }

  static fromProto(proto: ItemProto.Substance | undefined): Substance {
    if (!proto) {
      return EMPTY;
    }

    return new Substance(Material.fromProto(proto.getMaterial()), Distance.fromProto(proto.getThickness()));
  }
}

export const EMPTY = new Substance(Material.UNKNOWN, DISTANCE_EMPTY);
