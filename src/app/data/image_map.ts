import { MapsProto } from "../proto/generated/template_pb";

export class ImageMap {
  readonly path: string;
  readonly thumbnail: string;

  constructor(readonly name: string, readonly locations: string[], readonly pxPerSquare: number, 
    readonly layers: string[], readonly background: string) {
      this.path = locations.join('/') + '/' + name + ".jpg";
      this.thumbnail = locations.join('/') + '/' + name + "_tn.jpg";
    }

  static fromProto(proto: MapsProto.Map): ImageMap {
    return new ImageMap(proto.getName(), proto.getLocationsList(), proto.getPxPerSquare(), proto.getLayersList(),
      proto.getBackground());
  }

  makeLayer(layer: string) {
    return this.locations.join('/') + '/' + this.name + ' - ' + layer + '.jpg'
  }
}
