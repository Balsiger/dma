import { SpellProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Shape extends Enum<Shape> {
  static readonly shapes: Shape[] = [];

  static readonly UNKNOWN = new Shape('Unknown', '?', SpellProto.Range.Shape.UNKNOWN_SHAPE);
  static readonly CONE = new Shape('Cone', 'CO', SpellProto.Range.Shape.CONE);
  static readonly CUBE = new Shape('Cube', 'CU', SpellProto.Range.Shape.CUBE);
  static readonly CYLINDER = new Shape('Cylinder', 'CY', SpellProto.Range.Shape.CYLINDER);
  static readonly LINE = new Shape('Line', 'LI', SpellProto.Range.Shape.LINE);
  static readonly SPHERE = new Shape('Sphere', 'SP', SpellProto.Range.Shape.SPHERE);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    Shape.shapes.push(this);
  }

  resolve(other: Shape[]): Shape {
    if (this !== Shape.UNKNOWN) {
      return this;
    }

    for (const shape of other) {
      if (shape !== Shape.UNKNOWN) {
        return shape;
      }
    }

    return this;
  }

  static fromString(text: string): Shape {
    return Enum.fromStringValue(text, Shape.shapes, Shape.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Shape {
    return Enum.fromProtoValue(proto, Shape.shapes, Shape.UNKNOWN);
  }
}
