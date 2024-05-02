import { Campaign } from '../../data/facts/campaign';
import { FirebaseService } from '../firebase.service';
import { CampaignEvent, Data } from './campaign-event';
import { CampaignService } from './campaign.service';
import { FactService } from './fact.service';

const PATH = 'adventure-events';

export class EventService extends FactService<Data, CampaignEvent, EventService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign) {
    super(
      firebaseService,
      CampaignService.buildPath(campaign) + '/' + PATH,
      CampaignEvent.fromData.bind(null, campaign),
    );
  }
}
