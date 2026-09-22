import { Adventure } from '../../data/entities/fluid/adventure';
import { Data, EncounterFact } from '../../data/entities/fluid/encounter-fact';
import { FirebaseService } from '../firebase.service';
import { ImmutablesService } from '../immutable/entities.service';
import { AdventureService } from './adventure.service';
import { FluidService } from './fluid.service';

const PATH = 'encounters';

export class EncounterFactService extends FluidService<Data, EncounterFact, EncounterFactService> {
  constructor(firebaseService: FirebaseService, entitiesService: ImmutablesService, adventure: Adventure) {
    super(
      firebaseService,
      AdventureService.buildPath(adventure) + '/' + PATH,
      EncounterFact.fromData.bind(null, adventure, entitiesService),
    );
  }
}
