import { Injectable, computed } from '@angular/core';
import { CampaignNPC, Data as CampaignNPCData } from '../../data/entities/npc';
import { Adventure } from '../../data/facts/adventure';
import { Campaign, Data as CampaignData } from '../../data/facts/campaign';
import { AdventureEvent, Data as AdventureEventData } from '../../ui/pages/campaign/journal/adventure-event';
import { Data as JournalData, JournalEntry } from '../../ui/pages/campaign/journal/journal-entry';
import { CharacterService } from '../character.service';
import { EntityServices } from '../entity/entity_services';
import { FirebaseService } from '../firebase.service';
import { AdventureService } from './adventure.service';
import { FactService } from './fact.service';

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

  async loadJournal(campaign: Campaign): Promise<JournalEntry[]> {
    const data = await this.firebaseService.loadDocuments(PATH + '/' + campaign.name + '/journal-entries');
    return data.map((d) => JournalEntry.fromData(campaign, d.id, d.data as JournalData));
  }

  async loadAdventureEvents(campaign: Campaign): Promise<AdventureEvent[]> {
    const data = await this.firebaseService.loadDocuments(PATH + '/' + campaign.name + '/adventure-events');
    return data.map((d) => AdventureEvent.fromData(campaign, d.id, d.data as AdventureEventData));
  }

  async loadNPCs(campaign: Campaign): Promise<CampaignNPC[]> {
    const data = await this.firebaseService.loadDocuments(PATH + '/' + campaign.name + '/npcs');
    return data.map((d) => CampaignNPC.fromData(d.id, d.data as CampaignNPCData));
  }

  async add(campaign: Campaign) {
    this.firebaseService.saveData(this.generateId(campaign.name), campaign.toData());
  }

  async setAdventure(adventure: Adventure) {
    this.firebaseService.saveData(this.generateAdventureId(adventure), adventure.toData());
  }

  async setJournalEntry(entry: JournalEntry) {
    this.firebaseService.saveData(this.generateJournalEntryId(entry), entry.toData());
  }

  async setAdventureEvent(event: AdventureEvent) {
    this.firebaseService.saveData(this.generateAdventureEventId(event), event.toData());
  }

  deleteAdventure(adventure: Adventure) {
    this.firebaseService.delete(this.generateAdventureId(adventure));
  }

  deleteAdventureEvent(event: AdventureEvent) {
    this.firebaseService.delete(this.generateAdventureEventId(event));
  }

  private generateId(name: string): string {
    return PATH + '/' + name;
  }

  private generateAdventureId(adventure: Adventure): string {
    return this.generateId(adventure.campaign.name) + '/adventures/' + adventure.name;
  }

  private generateJournalEntryId(entry: JournalEntry): string {
    return this.generateId(entry.campaign.name) + '/journal-entries/' + entry.campaignDate;
  }

  generateAdventureEventId(event: AdventureEvent): string {
    return this.generateId(event.campaign.name) + '/adventure-events/' + event.date.toDateString();
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
