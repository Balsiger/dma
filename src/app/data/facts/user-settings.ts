import { signal } from '@angular/core';
import { UserSettingsService } from '../../services/fact/user-settings.service';
import { Fact } from './fact';
import { TV, Data as TVData } from './factoids/TV';

export interface Data {
  tv?: TVData;
}

export class UserSettings extends Fact<Data, UserSettingsService> {
  static ID = 'settings';

  tv = signal<TV>(TV.fromData({}));

  constructor(service: UserSettingsService, data: Data) {
    super(service);

    this.update(data);
  }

  static fromData(service: UserSettingsService, _id: string, data: Data): UserSettings {
    return new UserSettings(service, data);
  }

  override update(data: Data) {
    if (data.tv) {
      this.tv.set(TV.fromData(data.tv));
    }
  }

  override toData(): Data {
    return {
      tv: this.tv()?.toData(),
    };
  }

  override buildDocumentId(): string {
    return UserSettings.ID;
  }

  public override async save() {
    super.save();
  }
}
