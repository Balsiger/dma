import { Adventure } from '../../data/facts/adventure';
import { Data, Encounter } from '../../data/facts/encounter';
import { EntityServices } from '../entity/entity_services';
import { FirebaseService } from '../firebase.service';
import { AdventureService } from './adventure.service';
import { FactService } from './fact.service';

const PATH = 'encounters';

export class EncounterService extends FactService<Data, Encounter, EncounterService> {
  constructor(firebaseService: FirebaseService, entityServices: EntityServices, adventure: Adventure) {
    super(
      firebaseService,
      AdventureService.buildPath(adventure) + '/' + PATH,
      Encounter.LfromData.bind(null, adventure, entityServices),
    );
  }
}
