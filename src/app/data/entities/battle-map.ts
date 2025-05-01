import { MapsProto } from '../../proto/generated/template_pb';
import { Entity, EntityType } from './entity';
import { Common } from './values/common';

export interface Attribution {
  name: string;
  url: string;
}

export class BattleMapLevel {
  constructor(
    readonly base: string,
    readonly masks: string[],
    readonly layers: string[],
  ) {}

  static fromProto(proto: MapsProto.Map.Level): BattleMapLevel {
    return new BattleMapLevel(proto.getBase(), proto.getMasksList(), proto.getLayersList());
  }
}

export class BattleMap extends Entity<BattleMap> {
  static EMPTY = new BattleMap(Common.create('', EntityType.map), '', [], 100, [], [], 'pink', 0, 0, {
    name: '',
    url: '',
  });

  readonly path: string;
  readonly thumbnail: string;
  readonly fullName: string;

  constructor(
    common: Common,
    product: string,
    readonly locations: string[],
    readonly pxPerSquare: number,
    readonly levels: BattleMapLevel[],
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
    return new BattleMap(Common.create(name, EntityType.map), '', [], 0, [], [], '', 0, 0, {
      name: '',
      url: '',
    });
  }

  static fromProto(proto: MapsProto.Map, productName: string, productId: string): BattleMap {
    return new BattleMap(
      Common.fromProto(proto.getCommon(), productName, productId, EntityType.map, true),
      productName,
      proto.getLocationsList(),
      proto.getPxPerSquare(),
      proto.getLevelsList().map((l) => BattleMapLevel.fromProto(l)),
      proto.getLayersList(),
      proto.getBackground(),
      proto.getWidth(),
      proto.getHeight(),
      { name: proto.getAttribution()?.getName() || '', url: proto.getAttribution()?.getUrl() || '' },
    );
  }

  makeLayer(level: string, layer: string) {
    if (level) {
      return this.locations.join('/') + '/' + this.name + ' - ' + level + ' - ' + layer + '.webp';
    } else {
      return this.locations.join('/') + '/' + this.name + ' - ' + layer + '.webp';
    }
  }

  makeMask(level: string, name: string): string {
    if (level) {
      return this.locations.join('/') + '/' + this.name + ' - ' + level + ' - ' + name + '.mask.webp';
    } else {
      return this.locations.join('/') + '/' + this.name + ' - ' + name + '.mask.webp';
    }
  }

  makeLevel(name: string): string {
    if (name) {
      return this.locations.join('/') + '/' + this.name + ' - ' + name + '.webp';
    } else {
      return this.locations.join('/') + '/' + this.name + '.webp';
    }
  }

  makeLevelMask(name: string): string {
    if (name) {
      return this.locations.join('/') + '/' + this.name + ' - ' + name + '.mask.webp';
    } else {
      return this.locations.join('/') + '/' + this.name + '.mask.webp';
    }
  }
}
