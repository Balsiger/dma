import { Injectable, computed } from '@angular/core';
import { Campaign, Data as CampaignData } from '../../data/entities/fluid/campaign';
import { AudioService } from '../audio.service';
import { FirebaseService } from '../firebase.service';
import { ImmutablesService } from '../immutable/entities.service';
import { AdventureService } from './adventure.service';
import { CharacterService } from './character.service';
import { EventService } from './event.service';
import { FluidService } from './fluid.service';
import { JournalService } from './journal.service';
import { NpcFactService } from './npcFact.service';

const PATH = 'campaigns';

@Injectable({ providedIn: 'root' })
export class CampaignService extends FluidService<CampaignData, Campaign, CampaignService> {
  readonly campaigns = computed(() => this.fluids());

  constructor(
    readonly firebaseService: FirebaseService,
    private readonly entitiesService: ImmutablesService,
    audioService: AudioService,
  ) {
    super(firebaseService, PATH, Campaign.fromData.bind(null, audioService, entitiesService));
  }

  createAdventureService(campaign: Campaign): AdventureService {
    return new AdventureService(this.firebaseService, this.entitiesService, campaign);
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

  createNpcService(campaign: Campaign): NpcFactService {
    return new NpcFactService(this.firebaseService, campaign);
  }

  static buildPath(campaign: Campaign): string {
    return PATH + '/' + campaign.name;
  }
}
