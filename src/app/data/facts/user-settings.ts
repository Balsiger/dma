import { signal } from '@angular/core';
import { UserSettingsService } from '../../services/fact/user-settings.service';
import { Version } from '../entities/values/enums/version';
import { Fact } from './fact';
import { TV, Data as TVData } from './factoids/TV';

export interface HouseRules {
  doubleHp?: boolean; // Double monster hp due to large party.
}

export interface Data {
  tv?: TVData;
  version: string;
  name?: string;
  email?: string;
  houseRules?: HouseRules;
}

export class UserSettings extends Fact<Data, UserSettingsService> {
  static ID = 'settings';

  tv = signal(TV.fromData({}));
  version = signal(Version.DND_5_24);
  houseRules = signal<HouseRules>({});

  protected name = signal('');
  protected email = signal('');

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
    if (data.houseRules) {
      this.houseRules.set(data.houseRules);
    }
  }

  login(name: string, email: string) {
    this.name.set(name);
    this.email.set(email);

    this.save();
  }

  override toData(): Data {
    return {
      tv: this.tv()?.toData(),
      version: this.version()?.toString(),
      name: this.name(),
      email: this.email(),
      houseRules: this.houseRules(),
    };
  }

  override buildDocumentId(): string {
    return UserSettings.ID;
  }

  public override async save() {
    super.save();
  }
}
