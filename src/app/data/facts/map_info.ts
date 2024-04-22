import { Data } from './campaign';

export class MapInfo {
  constructor(
    readonly name: string,
    readonly layers: string[],
    readonly x: number,
    readonly y: number,
    readonly rotation: number,
  ) {}

  static fromData(data: Data) {
    return new MapInfo(
      data.map || '',
      data.mapLayers || [],
      data.mapPosition ? data.mapPosition[0] || 0 : 0,
      data.mapPosition ? data.mapPosition[1] || 0 : 0,
      data.mapRotation || 0,
    );
  }

  withLayers(layers: string[]): MapInfo {
    return new MapInfo(this.name, layers, this.x, this.y, this.rotation);
  }

  withPosition(x: number, y: number): MapInfo {
    return new MapInfo(this.name, this.layers, x, y, this.rotation);
  }

  withRotation(rotation: number): MapInfo {
    return new MapInfo(this.name, this.layers, this.x, this.y, rotation);
  }
}
