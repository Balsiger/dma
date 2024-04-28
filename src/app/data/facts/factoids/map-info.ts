import { signal } from '@angular/core';
import { Factoid } from './factoid';

export interface Data {
  name?: string;
  layers?: string[];
  x?: number;
  y?: number;
  rotation?: number;
}

export class MapInfo implements Factoid<Data> {
  static EMPTY = new MapInfo({});

  name = signal('');
  layers = signal<string[]>([]);
  x = signal(0);
  y = signal(0);
  rotation = signal(0);

  constructor(data: Data) {
    this.update(data);
  }

  update(data: Data) {
    this.name.set(data.name || '');
    this.layers.set(data.layers || []);
    this.x.set(data.x || 0);
    this.y.set(data.y || 0);
    this.rotation.set(data.rotation || 0);
  }

  static fromData(data: Data) {
    return new MapInfo(data);
  }

  toData(): Data {
    return {
      name: this.name(),
      layers: this.layers(),
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
    };
  }

  static isEqual(a: MapInfo, b: MapInfo) {
    return a.name === b.name && a.layers === b.layers && a.x === b.x && a.y === b.y && a.rotation === b.rotation;
  }

  withLayers(layers: string[]): MapInfo {
    const data = this.toData();
    data.layers = layers;
    return new MapInfo(data);
  }

  withPosition(x: number, y: number): MapInfo {
    const data = this.toData();
    data.x = x;
    data.y = y;
    return new MapInfo(data);
  }

  withRotation(rotation: number): MapInfo {
    const data = this.toData();
    data.rotation = rotation;
    return new MapInfo(data);
  }
}
