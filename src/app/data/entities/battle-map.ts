import { MapsProto } from '../../proto/generated/template_pb';
import { Entity, EntityType } from './entity';
import { Common } from './values/common';
import { Version } from './values/enums/version';
import { EMPTY as REFERENCES_EMPTY } from './values/reference';

export interface Attribution {
  name: string;
  url: string;
}

export class BattleMap extends Entity<BattleMap> {
  static EMPTY = new BattleMap(Common.create('', EntityType.map), '', [], 100, [], 'pink', 0, 0, { name: '', url: '' });

  readonly path: string;
  readonly thumbnail: string;
  readonly fullName: string;

  constructor(
    common: Common,
    product: string,
    readonly locations: string[],
    readonly pxPerSquare: number,
    readonly layers: string[],
    readonly background: string,
    readonly width: number,
    readonly height: number,
    readonly attribution: Attribution,
  ) {
    super(common, product);

    this.fullName = locations.join('/') + '/' + this.name;
    this.path = this.fullName + '.webp';
    this.thumbnail = this.fullName + '_tn.webp';
  }

  override resolve(bases: BattleMap[], values: Map<string, string>): BattleMap {
    return this;
  }

  static create(name: string, bases: string[] = []): BattleMap {
    return new BattleMap(
      new Common(name, '', bases, [], '', '', [], REFERENCES_EMPTY, [], EntityType.map, Version.DND_5_24),
      '',
      [],
      0,
      [],
      '',
      0,
      0,
      {
        name: '',
        url: '',
      },
    );
  }

  static fromProto(proto: MapsProto.Map, productName: string, productId: string): BattleMap {
    return new BattleMap(
      Common.fromProto(proto.getCommon(), productName, productId, EntityType.map, true),
      productName,
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
