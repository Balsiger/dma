import { Adventure } from '../../data/facts/adventure';
import { Data, Encounter } from '../../data/facts/encounter';
import { EntitiesService } from '../entity/entities.service';
import { FirebaseService } from '../firebase.service';
import { AdventureService } from './adventure.service';
import { FactService } from './fact.service';

const PATH = 'encounters';

export class EncounterService extends FactService<Data, Encounter, EncounterService> {
  constructor(firebaseService: FirebaseService, entitiesService: EntitiesService, adventure: Adventure) {
    super(
      firebaseService,
      AdventureService.buildPath(adventure) + '/' + PATH,
      Encounter.fromData.bind(null, adventure, entitiesService),
    );
  }
}
