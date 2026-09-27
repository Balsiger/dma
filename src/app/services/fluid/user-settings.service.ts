import { Injectable } from '@angular/core';
import { Data, UserSettings } from '../../data/entities/fluid/user-settings';
import { FirebaseService } from '../firebase.service';
import { FluidService } from './fluid.service';

const PATH = 'settings';

@Injectable({ providedIn: 'root' })
export class UserSettingsService extends FluidService<Data, UserSettings, UserSettingsService> {
  constructor(firebaseService: FirebaseService) {
    super(firebaseService, PATH, UserSettings.fromData.bind(null));
  }
}
