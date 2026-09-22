import { signal } from '@angular/core';
import { UserMiniatureService } from '../../../../services/fact/user-miniature.service';
import { NestedFluid } from './factoid';

export interface Data {
  [key: string]: number;
}

export class Owned implements NestedFluid<Data> {
  static EMPTY = new Owned({});

  ownedByMiniature = signal<Map<string, number>>(new Map());

  constructor(data: Data) {
    this.update(data);
  }

  update(data: Data) {
    this.ownedByMiniature.set(new Map(Object.entries(data)));
  }

  toData(): Data {
    return Object.fromEntries(this.ownedByMiniature());
  }

  static fromData(_service: UserMiniatureService, _id: string, data: Data) {
    return new Owned(data);
  }
}
