import { MapsProto } from '../proto/generated/template_pb';

export interface Attribution {
  name: string;
  url: string;
}

export class ImageMap {
  readonly path: string;
  readonly thumbnail: string;
  readonly fullName: string;

  constructor(
    readonly name: string,
    readonly locations: string[],
    readonly pxPerSquare: number,
    readonly layers: string[],
    readonly background: string,
    readonly width: number,
    readonly height: number,
    readonly attribution: Attribution
  ) {
    this.fullName = locations.join('/') + '/' + name;
    this.path = this.fullName + '.webp';
    this.thumbnail = this.fullName + '_tn.webp';
  }

  static fromProto(proto: MapsProto.Map): ImageMap {
    return new ImageMap(
      proto.getName(),
      proto.getLocationsList(),
      proto.getPxPerSquare(),
      proto.getLayersList(),
      proto.getBackground(),
      proto.getWidth(),
      proto.getHeight(),
      { name: proto.getAttribution()?.getName() || '', url: proto.getAttribution()?.getUrl() || '' }
    );
  }

  makeLayer(layer: string) {
    return this.locations.join('/') + '/' + this.name + ' - ' + layer + '.webp';
  }
}
