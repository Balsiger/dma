import { Injectable } from '@angular/core';
import { MiniaturesService } from './miniatures.service';
import { TokensService } from './tokens.service';

@Injectable({ providedIn: 'root' })
export class EntityServices {
  constructor(
    readonly miniatureService: MiniaturesService,
    readonly tokenService: TokensService,
  ) {}
}
