import { Campaign } from '../../data/entities/fluid/campaign';
import { FirebaseService } from '../firebase.service';
import { FluidCampaignService } from './campaign.service';
import { FluidService } from './fluid.service';
import { Data, JournalEntry } from './journal-entry';

const PATH = 'journal-entries';

export class JournalService extends FluidService<Data, JournalEntry, JournalService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign) {
    super(
      firebaseService,
      FluidCampaignService.buildPath(campaign) + '/' + PATH,
      JournalEntry.fromData.bind(null, campaign),
    );
  }
}
