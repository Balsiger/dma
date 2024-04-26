import { Injectable } from '@angular/core';
import { Data, UserMiniatures } from '../../data/facts/user-miniature';
import { FirebaseService } from '../firebase.service';
import { FactService } from './fact.service';

const PATH = 'miniatures';

@Injectable({
  providedIn: 'root',
})
export class UserMiniatureService extends FactService<Data, UserMiniatures, UserMiniatureService> {
  constructor(firebaseService: FirebaseService) {
    super(firebaseService, PATH, UserMiniatures.fromData.bind(null));
  }
}
