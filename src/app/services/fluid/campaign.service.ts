import { Injectable, computed } from '@angular/core';
import { Campaign, Data as CampaignData } from '../../data/entities/fluid/campaign';
import { AudioService } from '../audio.service';
import { CharacterService } from '../combined/character.service';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { ImmutablesService } from '../immutable/immutables.service';
import { AdventureService } from './adventure.service';
import { FluidCharacterService } from './character.service';
import { EventService } from './event.service';
import { FluidService } from './fluid.service';
import { JournalService } from './journal.service';
import { NpcFluidService } from './npc-fluid.service';

const CONTEXT = Context.createTerminal('campaigns');

@Injectable({ providedIn: 'root' })
export class FluidCampaignService extends FluidService<CampaignData, Campaign, FluidCampaignService> {
  readonly campaigns = computed(() => this.fluids());

  constructor(
    readonly firebaseService: FirebaseService,
    private readonly immutablesService: ImmutablesService,
    readonly audioService: AudioService,
  ) {
    super(firebaseService, CONTEXT, Campaign.fromData.bind(null, audioService, immutablesService));
  }

  createAdventureService(campaign: Campaign): AdventureService {
    return new AdventureService(
      this.firebaseService,
      this.immutablesService,
      campaign,
      this.buildContext(campaign.name),
    );
  }

  createCharacterService(campaign: Campaign): CharacterService {
    return CharacterService.create(
      this.firebaseService,
      new FluidCharacterService(this.firebaseService, campaign, this.buildContext(campaign.name)),
      campaign,
    );
  }

  createJournalService(campaign: Campaign): JournalService {
    return new JournalService(this.firebaseService, campaign, this.buildContext(campaign.name));
  }

  createEventService(campaign: Campaign): EventService {
    return new EventService(this.firebaseService, campaign, this.buildContext(campaign.name));
  }

  createNpcService(campaign: Campaign): NpcFluidService {
    return new NpcFluidService(this.firebaseService, campaign, this.buildContext(campaign.name));
  }
}
