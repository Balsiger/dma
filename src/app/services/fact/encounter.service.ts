import { Adventure } from '../../data/facts/adventure';
import { Data, EncounterFact } from '../../data/facts/encounter-fact';
import { EntitiesService } from '../entity/entities.service';
import { FirebaseService } from '../firebase.service';
import { AdventureService } from './adventure.service';
import { FactService } from './fact.service';

const PATH = 'encounters';

export class EncounterFactService extends FactService<Data, EncounterFact, EncounterFactService> {
  constructor(firebaseService: FirebaseService, entitiesService: EntitiesService, adventure: Adventure) {
    super(
      firebaseService,
      AdventureService.buildPath(adventure) + '/' + PATH,
      EncounterFact.fromData.bind(null, adventure, entitiesService),
    );
  }
}
