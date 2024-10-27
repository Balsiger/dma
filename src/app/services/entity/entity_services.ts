import { Injectable } from '@angular/core';
import { MiniaturesService } from './miniatures.service';

@Injectable({ providedIn: 'root' })
export class EntityServices {
  constructor(readonly miniatureService: MiniaturesService) {}
}
