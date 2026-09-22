import { Injectable } from '@angular/core';
import { Data, UserMiniatures } from '../../data/entities/fluid/user-miniature';
import { FirebaseService } from '../firebase.service';
import { FluidService } from './fluid.service';

const PATH = 'miniatures';

@Injectable({
  providedIn: 'root',
})
export class UserMiniatureService extends FluidService<Data, UserMiniatures, UserMiniatureService> {
  constructor(firebaseService: FirebaseService) {
    super(firebaseService, PATH, UserMiniatures.fromData.bind(null));
  }
}
