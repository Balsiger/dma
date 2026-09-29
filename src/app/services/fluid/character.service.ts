import { Campaign } from '../../data/entities/fluid/campaign';
import { FluidCharacter, FluidCharacterData } from '../../data/entities/fluid/character';
import { FirebaseService } from '../firebase.service';
import { FluidCampaignService } from './campaign.service';
import { FluidService } from './fluid.service';

const PATH = 'characters';

export class FluidCharacterService extends FluidService<FluidCharacterData, FluidCharacter, FluidCharacterService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign) {
    super(
      firebaseService,
      FluidCampaignService.buildPath(campaign) + '/' + PATH,
      FluidCharacter.fromData.bind(null, campaign),
    );
  }
}
