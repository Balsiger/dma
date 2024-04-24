import { Campaign } from '../../data/facts/campaign';
import { Data, JournalEntry } from '../../ui/pages/campaign/journal/journal-entry';
import { FirebaseService } from '../firebase.service';
import { CampaignService } from './campaign.service';
import { FactService } from './fact.service';

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
