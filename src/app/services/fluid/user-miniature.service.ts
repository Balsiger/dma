import { Injectable } from '@angular/core';
import { Data, UserMiniatures } from '../../data/entities/fluid/user-miniature';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { FluidService } from './fluid.service';

const CONTEXT = Context.create('miniatures');

@Injectable({
  providedIn: 'root',
})
export class UserMiniatureService extends FluidService<Data, UserMiniatures, UserMiniatureService> {
  constructor(firebaseService: FirebaseService) {
    super(firebaseService, CONTEXT, UserMiniatures.fromData.bind(null));
  }
}
