import { Injectable } from '@angular/core';
import { Data, UserSettings } from '../../data/entities/fluid/user-settings';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { FluidService } from './fluid.service';

const CONTEXT = Context.createTerminal('settings');

@Injectable({ providedIn: 'root' })
export class UserSettingsService extends FluidService<Data, UserSettings, UserSettingsService> {
  constructor(firebaseService: FirebaseService) {
    super(firebaseService, CONTEXT, UserSettings.fromData.bind(null));
  }
}
