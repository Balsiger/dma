import { Encounter } from '../../data/entities/combined/encounter';
import { Adventure, Data } from '../../data/entities/fluid/adventure';
import { Campaign } from '../../data/entities/fluid/campaign';
import { EncounterService } from '../combined/encounter.service';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { ImmutablesService } from '../immutable/immutables.service';
import { NoLocalService } from '../local/local.service';
import { EncounterFactService } from './encounter.service';
import { FluidService } from './fluid.service';

const PATH = 'adventures';

export class AdventureService extends FluidService<Data, Adventure, AdventureService> {
  constructor(
    firebase: FirebaseService,
    private readonly entitiesService: ImmutablesService,
    campaign: Campaign,
    context: Context,
  ) {
    super(firebase, context.extend(PATH), Adventure.fromData.bind(null, campaign, entitiesService));
  }

  createEncounterFactService(adventure: Adventure) {
    return new EncounterFactService(this.firebase, this.entitiesService, adventure, this.buildContext(adventure.name));
  }

  createEncounterService(adventure: Adventure): EncounterService {
    return new EncounterService(
      this.entitiesService.encounters,
      new EncounterFactService(this.firebase, this.entitiesService, adventure, this.buildContext(adventure.name)),
      new NoLocalService(),
      (e, f, l) => new Encounter(adventure, e, f),
    );
  }
}
