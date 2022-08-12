import { MapsProto } from "../proto/generated/template_pb";

export class ImageMap {
  readonly path: string;

  constructor(readonly name: string, readonly locations: string[], readonly pxPerSquare: number, 
    readonly image: string, readonly background: string) {
      this.path = locations.join('/') + '/' + image;
    }

  static fromProto(proto: MapsProto.Map): ImageMap {
    return new ImageMap(proto.getName(), proto.getLocationsList(), proto.getPxPerSquare(), proto.getImage(),
      proto.getBackground());
  }
}
