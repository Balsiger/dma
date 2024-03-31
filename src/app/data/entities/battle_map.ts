import { MapsProto } from '../../proto/generated/template_pb';
import { Entity } from './entity';
import { Common } from './values/common';

export interface Attribution {
  name: string;
  url: string;
}

export class BattleMap extends Entity<BattleMap> {
  readonly path: string;
  readonly thumbnail: string;
  readonly fullName: string;

  constructor(
    common: Common,
    readonly locations: string[],
    readonly pxPerSquare: number,
    readonly layers: string[],
    readonly background: string,
    readonly width: number,
    readonly height: number,
    readonly attribution: Attribution,
  ) {
    super(common);

    this.fullName = locations.join('/') + '/' + this.name;
    this.path = this.fullName + '.webp';
    this.thumbnail = this.fullName + '_tn.webp';
  }

  override resolve(bases: BattleMap[], values: Map<string, string>): BattleMap {
    return this;
  }

  static fromProto(proto: MapsProto.Map): BattleMap {
    return new BattleMap(
      Common.fromProto(proto.getCommon()),
      proto.getLocationsList(),
      proto.getPxPerSquare(),
      proto.getLayersList(),
      proto.getBackground(),
      proto.getWidth(),
      proto.getHeight(),
      { name: proto.getAttribution()?.getName() || '', url: proto.getAttribution()?.getUrl() || '' },
    );
  }

  makeLayer(layer: string) {
    return this.locations.join('/') + '/' + this.name + ' - ' + layer + '.webp';
  }
}
