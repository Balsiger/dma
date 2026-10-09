import { computed } from '@angular/core';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { FluidService } from './fluid.service';
import { Data, Notes } from './notes';

const PATH = 'notes';

export class NotesService extends FluidService<Data, Notes, NotesService> {
  notes = computed(() => (this.fluids().length > 0 ? this.fluids()[0] : new Notes(this, this.campaign, {})));

  constructor(
    firebaseService: FirebaseService,
    private readonly campaign: Campaign,
    context: Context,
  ) {
    super(firebaseService, context.extend(PATH), Notes.fromData.bind(null, campaign));
  }

  static create(firebaseService: FirebaseService, campaign: Campaign, context: Context) {
    return new NotesService(firebaseService, campaign, context);
  }
}
