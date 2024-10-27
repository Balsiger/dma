import { Injectable, computed } from '@angular/core';
import { Campaign, Data as CampaignData } from '../../data/facts/campaign';
import { AudioService } from '../audio.service';
import { EntitiesService } from '../entity/entities.service';
import { EntityServices } from '../entity/entity_services';
import { FirebaseService } from '../firebase.service';
import { AdventureService } from './adventure.service';
import { CampaignNpcService } from './campaignNpc.service';
import { CharacterService } from './character.service';
import { EventService } from './event.service';
import { FactService } from './fact.service';
import { JournalService } from './journal.service';

const PATH = 'campaigns';

@Injectable({ providedIn: 'root' })
export class CampaignService extends FactService<CampaignData, Campaign, CampaignService> {
  readonly campaigns = computed(() => this.facts());

  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly entityServices: EntityServices,
    private readonly entitiesService: EntitiesService,
    audioService: AudioService,
  ) {
    super(firebaseService, PATH, Campaign.fromData.bind(null, audioService, entitiesService));
  }

  createAdventureService(campaign: Campaign): AdventureService {
    return new AdventureService(this.firebaseService, this.entityServices, this.entitiesService, campaign);
  }

  createCharacterService(campaign: Campaign): CharacterService {
    return new CharacterService(this.firebaseService, campaign);
  }

  createJournalService(campaign: Campaign): JournalService {
    return new JournalService(this.firebaseService, campaign);
  }

  createEventService(campaign: Campaign): EventService {
    return new EventService(this.firebaseService, campaign);
  }

  createNpcService(campaign: Campaign): CampaignNpcService {
    return new CampaignNpcService(this.firebaseService, campaign);
  }

  static buildPath(campaign: Campaign): string {
    return PATH + '/' + campaign.name;
  }
}
