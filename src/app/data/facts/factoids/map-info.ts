import { signal } from '@angular/core';
import { TokensService } from '../../../services/entity/tokens.service';
import { Factoid } from './factoid';
import { Data as TokenData, TokenInfo } from './token-info';

export interface Data {
  name?: string;
  layers?: string[];
  x?: number;
  y?: number;
  rotation?: number;
  tokens?: TokenData[];
}

export class MapInfo implements Factoid<Data> {
  name = signal('');
  layers = signal<string[]>([]);
  x = signal(0);
  y = signal(0);
  rotation = signal(0);
  tokens = signal<TokenInfo[]>([]);

  constructor(
    private readonly tokenService: TokensService,
    data: Data,
  ) {
    this.update(data);
  }

  update(data: Data) {
    this.name.set(data.name || '');
    this.layers.set(data.layers || []);
    this.x.set(data.x || 0);
    this.y.set(data.y || 0);
    this.rotation.set(data.rotation || 0);
    this.tokens.set(data.tokens?.map((t) => TokenInfo.fromData(this.tokenService, t)) || []);
  }

  static fromData(tokenService: TokensService, data: Data) {
    return new MapInfo(tokenService, data);
  }

  toData(): Data {
    return {
      name: this.name(),
      layers: this.layers(),
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      tokens: this.tokens().map((t) => t.toData()),
    };
  }

  static isEqual(a: MapInfo, b: MapInfo) {
    return (
      a.name === b.name &&
      a.layers === b.layers &&
      a.x === b.x &&
      a.y === b.y &&
      a.rotation === b.rotation &&
      a.tokens === b.tokens
    );
  }

  withLayers(layers: string[]): MapInfo {
    const data = this.toData();
    data.layers = layers;
    return new MapInfo(this.tokenService, data);
  }

  withPosition(x: number, y: number): MapInfo {
    const data = this.toData();
    data.x = x;
    data.y = y;
    return new MapInfo(this.tokenService, data);
  }

  withRotation(rotation: number): MapInfo {
    const data = this.toData();
    data.rotation = rotation;
    return new MapInfo(this.tokenService, data);
  }

  addToken(token: TokenInfo) {
    this.tokens.set([...this.tokens(), token]);
  }

  removeToken(token: TokenInfo) {
    this.tokens.set(this.tokens().filter((t) => t !== token));
  }
}
