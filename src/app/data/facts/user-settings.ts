import { signal } from '@angular/core';
import { UserSettingsService } from '../../services/fact/user-settings.service';
import { Version } from '../entities/values/enums/version';
import { Fact } from './fact';
import { TV, Data as TVData } from './factoids/TV';

export interface Data {
  tv?: TVData;
  version: string;
}

export class UserSettings extends Fact<Data, UserSettingsService> {
  static ID = 'settings';

  tv = signal<TV>(TV.fromData({}));
  version = signal<Version>(Version.DND_5_24);

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
    if (data.version) {
      this.version.set(Version.fromString(data.version));
    }
  }

  override toData(): Data {
    return {
      tv: this.tv()?.toData(),
      version: this.version()?.toString(),
    };
  }

  override buildDocumentId(): string {
    return UserSettings.ID;
  }

  public override async save() {
    super.save();
  }
}
