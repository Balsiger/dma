import { Campaign } from '../../data/entities/fluid/campaign';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { CampaignEvent, Data } from './campaign-event';
import { FluidService } from './fluid.service';

const PATH = 'adventure-events';

export class EventService extends FluidService<Data, CampaignEvent, EventService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign, context: Context) {
    super(firebaseService, context.extend(PATH), CampaignEvent.fromData.bind(null, campaign));
  }
}
