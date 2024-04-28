import { signal } from '@angular/core';
import { UserMiniatureService } from '../../services/fact/user-miniature.service';
import { Fact } from './fact';
import { Location, Data as LocationData } from './factoids/location';
import { Owned, Data as OwnedData } from './factoids/owned';

export interface Data {
  locations?: LocationData[];
  owned?: OwnedData;
}

export class UserMiniatures extends Fact<Data, UserMiniatureService> {
  locations = signal<Location[]>([]);
  owned = signal<Owned>(Owned.EMPTY);

  constructor(service: UserMiniatureService, data: Data) {
    super(service);

    this.update(data);
  }

  static fromData(service: UserMiniatureService, _id: string, data: Data) {
    return new UserMiniatures(service, data);
  }

  override update(data: Data) {
    if (data.locations?.length || data.owned) {
      this.locations.set(data.locations?.map((l) => Location.fromData(this.service, '', l)) || []);
      this.owned.set(Owned.fromData(this.service, '', data.owned || {}));
    }
  }

  override toData(): Data {
    throw new Error('Method not implemented.');
  }

  override buildDocumentId(): string {
    throw new Error('Method not implemented.');
  }
}
