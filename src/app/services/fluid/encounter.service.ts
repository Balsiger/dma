import { Adventure } from '../../data/entities/fluid/adventure';
import { Data, FluidEncounter } from '../../data/entities/fluid/encounter';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { ImmutablesService } from '../immutable/immutables.service';
import { FluidService } from './fluid.service';

const PATH = 'encounters';

export class EncounterFactService extends FluidService<Data, FluidEncounter, EncounterFactService> {
  constructor(
    firebaseService: FirebaseService,
    entitiesService: ImmutablesService,
    adventure: Adventure,
    context: Context,
  ) {
    super(firebaseService, context.extend(PATH), FluidEncounter.fromData.bind(null, adventure, entitiesService));
  }
}
