import { Campaign } from '../../data/facts/campaign';
import { FirebaseService } from '../firebase.service';
import { CampaignService } from './campaign.service';
import { FactService } from './fact.service';
import { Data, JournalEntry } from './journal-entry';

const PATH = 'journal-entries';

export class JournalService extends FactService<Data, JournalEntry, JournalService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign) {
    super(
      firebaseService,
      CampaignService.buildPath(campaign) + '/' + PATH,
      JournalEntry.fromData.bind(null, campaign),
    );
  }
}
