import { Injectable, computed } from '@angular/core';
import { Adventure } from '../../data/facts/adventure';
import { Campaign, Data as CampaignData } from '../../data/facts/campaign';
import { CampaignEvent } from '../../ui/pages/campaign/journal/campaign-event';
import { JournalEntry } from '../../ui/pages/campaign/journal/journal-entry';
import { CharacterService } from '../character.service';
import { EntityServices } from '../entity/entity_services';
import { FirebaseService } from '../firebase.service';
import { AdventureService } from './adventure.service';
import { EventService } from './event.service';
import { FactService } from './fact.service';
import { JournalService } from './journal.service';
import { CampaignNpcService } from './campaignNpc.service';

const PATH = 'campaigns';

@Injectable({ providedIn: 'root' })
export class CampaignService extends FactService<CampaignData, Campaign, CampaignService> {
  readonly campaigns = computed(() => this.facts());

  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly entityServices: EntityServices,
  ) {
    super(firebaseService, PATH, Campaign.fromData.bind(null));
  }

  createAdventureService(campaign: Campaign): AdventureService {
    return new AdventureService(this.firebaseService, this.entityServices, campaign);
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

  // !
  // !!
  // !!!
  // !!!!
  // !!!!!
  // !!!!!!
  // !!!!!!!
  // TO BE REFACTORED BELOW!
  static buildPath(campaign: Campaign): string {
    return PATH + '/' + campaign.name;
  }

  /*
  async loadNPCs(campaign: Campaign): Promise<CampaignNPC[]> {
    const data = await this.firebaseService.loadDocuments(PATH + '/' + campaign.name + '/npcs');
    return data.map((d) => CampaignNPC.fromData(d.id, d.data as CampaignNPCData));
  }
  */

  async add(campaign: Campaign) {
    this.firebaseService.saveData(this.generateId(campaign.name), campaign.toData());
  }

  async setAdventure(adventure: Adventure) {
    this.firebaseService.saveData(this.generateAdventureId(adventure), adventure.toData());
  }

  async setJournalEntry(entry: JournalEntry) {
    this.firebaseService.saveData(this.generateJournalEntryId(entry), entry.toData());
  }

  async setAdventureEvent(event: CampaignEvent) {
    this.firebaseService.saveData(this.generateAdventureEventId(event), event.toData());
  }

  deleteAdventure(adventure: Adventure) {
    this.firebaseService.delete(this.generateAdventureId(adventure));
  }

  deleteAdventureEvent(event: CampaignEvent) {
    this.firebaseService.delete(this.generateAdventureEventId(event));
  }

  private generateId(name: string): string {
    return PATH + '/' + name;
  }

  private generateAdventureId(adventure: Adventure): string {
    return this.generateId(adventure.campaign.name) + '/adventures/' + adventure.name;
  }

  private generateJournalEntryId(entry: JournalEntry): string {
    return this.generateId(entry.campaign.name) + '/journal-entries/' + entry.date().toDateString();
  }

  generateAdventureEventId(event: CampaignEvent): string {
    return this.generateId(event.campaign.name) + '/adventure-events/' + event.date().toDateString();
  }

  async change(oldCampaign: Campaign | undefined, newCampaign: Campaign) {
    if (oldCampaign && oldCampaign.name !== newCampaign.name) {
      this.delete(oldCampaign);
    }

    await this.add(newCampaign);
  }

  create(name: string): Campaign {
    return new Campaign(this, name, {});
  }
}
