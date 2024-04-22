import { Campaign } from '../data/facts/campaign';
import { Character, Data } from '../data/facts/character';
import { CampaignService } from './fact/campaign.service';
import { FactService } from './fact/fact.service';
import { FirebaseService } from './firebase.service';

const PATH = 'characters';

export class CharacterService extends FactService<Data, Character, CharacterService> {
  constructor(
    private readonly firebaseService: FirebaseService,
    campaign: Campaign,
  ) {
    super(firebaseService, CampaignService.buildPath(campaign) + '/' + PATH, Character.fromData.bind(null, campaign));
  }
}
