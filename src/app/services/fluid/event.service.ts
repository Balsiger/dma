import { Campaign } from '../../data/entities/fluid/campaign';
import { FirebaseService } from '../firebase.service';
import { CampaignEvent, Data } from './campaign-event';
import { FluidCampaignService } from './campaign.service';
import { FluidService } from './fluid.service';

const PATH = 'adventure-events';

export class EventService extends FluidService<Data, CampaignEvent, EventService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign) {
    super(
      firebaseService,
      FluidCampaignService.buildPath(campaign) + '/' + PATH,
      CampaignEvent.fromData.bind(null, campaign),
    );
  }
}
