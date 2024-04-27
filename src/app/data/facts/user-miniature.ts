import { signal } from '@angular/core';
import { UserMiniatureService } from '../../services/fact/user-miniature.service';
import { Fact } from './fact';
import { Location, Data as LocationData } from './location';

export interface Data {
  locations?: LocationData[];
  owned?: OwnedData[];
}

export interface OwnedData {
  name: string;
  count: number;
}

export class UserMiniatures extends Fact<Data, UserMiniatureService> {
  locations = signal<Location[]>([]);

  constructor(service: UserMiniatureService, data: Data) {
    super(service);

    this.update(data);
  }

  static fromData(service: UserMiniatureService, _id: string, data: Data) {
    return new UserMiniatures(service, data);
  }

  override update(data: Data) {
    if (data.locations?.length || data.owned?.length) {
      this.locations.set(data.locations?.map((l) => Location.fromData(this.service, '', l)) || []);
    }
  }

  override toData(): Data {
    throw new Error('Method not implemented.');
  }

  override buildDocumentId(): string {
    throw new Error('Method not implemented.');
  }
}
