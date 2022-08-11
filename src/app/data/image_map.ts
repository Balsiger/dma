import { MapsProto } from "../proto/generated/template_pb";

export class ImageMap {
  constructor(readonly name: string, readonly location: string, readonly pxPerSquare: number, 
    readonly image: string, readonly background: string) {}

  static fromProto(proto: MapsProto.Map): ImageMap {
    return new ImageMap(proto.getName(), proto.getLocation(), proto.getPxPerSquare(), proto.getImage(),
      proto.getBackground());
  }
}
