import { Campaign } from '../../data/entities/fluid/campaign';
import { Character, Data } from '../../data/entities/fluid/character';
import { FirebaseService } from '../firebase.service';
import { CampaignService } from './campaign.service';
import { FactService } from './fact.service';

const PATH = 'characters';

export class CharacterService extends FactService<Data, Character, CharacterService> {
  constructor(
    private readonly firebaseService: FirebaseService,
    campaign: Campaign,
  ) {
    super(firebaseService, CampaignService.buildPath(campaign) + '/' + PATH, Character.fromData.bind(null, campaign));
  }
}
