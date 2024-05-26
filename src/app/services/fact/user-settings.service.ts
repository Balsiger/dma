import { Injectable } from '@angular/core';
import { Data, UserSettings } from '../../data/facts/user-settings';
import { FirebaseService } from '../firebase.service';
import { FactService } from './fact.service';

const PATH = 'settings';

@Injectable({ providedIn: 'root' })
export class UserSettingsService extends FactService<Data, UserSettings, UserSettingsService> {
  constructor(firebaseService: FirebaseService) {
    super(firebaseService, PATH, UserSettings.fromData.bind(null));
  }
}
