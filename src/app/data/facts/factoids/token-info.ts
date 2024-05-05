import { signal } from '@angular/core';
import { TokensService } from '../../../services/entity/tokens.service';
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

  constructor(
    private readonly service: TokensService,
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
    this.token.set(await this.service.get(this.name()));
    this.widthPx = (this.token()?.widthSquares || 1) * 100;
    this.heightPx = (this.token()?.heightSquares || 1) * 100;
  }

  static fromData(service: TokensService, data: Data): TokenInfo {
    return new TokenInfo(service, data);
  }

  static fromEntity(service: TokensService, token: Token, data?: Data): TokenInfo {
    return new TokenInfo(service, data ? data : { name: token.name });
  }
}
