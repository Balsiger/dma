import { signal } from '@angular/core';
import { Entities } from '../../entities/entities';
import { Token } from '../../entities/token';
import { Factoid } from './factoid';

export interface Data {
  name?: string;
  x?: number;
  y?: number;
  z?: number;
  rotation?: number;
}

export class TokenInfo implements Factoid<Data> {
  name = signal('');
  x = signal(0);
  y = signal(0);
  z = signal(0);
  rotation = signal(0);
  token = signal<Token | undefined>(undefined);
  widthPx = 100;
  heightPx = 100;
  originXPx = 0;
  originYPx = 0;

  constructor(
    private readonly tokens: Entities<Token>,
    data: Data,
  ) {
    this.update(data);
  }

  toData(): Data {
    return {
      name: this.name(),
      x: this.x(),
      y: this.y(),
      z: this.z(),
      rotation: this.rotation(),
    };
  }

  async update(data: Data) {
    this.name.set(data.name || '');
    this.x.set(data.x || 0);
    this.y.set(data.y || 0);
    this.z.set(data.z || 0);
    this.rotation.set(data.rotation || 0);
    this.token.set(this.tokens.get(this.name()));
    this.widthPx = (this.token()?.widthSquares || 1) * 100;
    this.heightPx = (this.token()?.heightSquares || 1) * 100;
    this.originXPx = (this.token()?.originX || 0) * 100;
    this.originYPx = (this.token()?.originY || 0) * 100;
  }

  static fromData(tokens: Entities<Token>, data: Data): TokenInfo {
    return new TokenInfo(tokens, data);
  }

  static fromEntity(tokens: Entities<Token>, token: Token, data?: Data): TokenInfo {
    return new TokenInfo(tokens, data ? data : { name: token.name });
  }
}
