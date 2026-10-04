import { Campaign } from '../../data/entities/fluid/campaign';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { FluidService } from './fluid.service';
import { Data, JournalEntry } from './journal-entry';

const PATH = 'journal-entries';

export class JournalService extends FluidService<Data, JournalEntry, JournalService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign, context: Context) {
    super(firebaseService, context.extendTerminal(PATH), JournalEntry.fromData.bind(null, campaign));
  }
}
