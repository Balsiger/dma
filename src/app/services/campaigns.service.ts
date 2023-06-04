import { Injectable } from '@angular/core';
import { CampaignNPC, Data as CampaignNPCData } from '../data/entities/npc';
import { Strings } from '../data/strings';
import { Adventure, Data as AdventureData } from '../data/things/adventure';
import { Campaign, Data as CampaignData } from '../data/things/campaign';
import { Character, Data as CharacterData } from '../data/things/character';
import { Data as EncounterData, Encounter } from '../data/things/encounter';
import { AdventureEvent, Data as AdventureEventData } from '../ui/pages/campaign/journal/adventure-event';
import { Data as JournalData, JournalEntry } from '../ui/pages/campaign/journal/journal-entry';
import { Document, FirebaseService } from './firebase.service';
import { InvitesService } from './invites.service';
import { ItemService } from './item.service';
import { MonsterService } from './monster.service';
import { NpcService } from './npc.service';
import { SpellService } from './spell.service';

const PATH = 'campaigns';

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  readonly campaigns: Campaign[] = [];
  private readonly campaignsByName: Map<string, Campaign> = new Map();
  private readonly campaignNames = new Set<string>();

  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService,
    private readonly itemService: ItemService,
    private readonly npcService: NpcService,
    private readonly invitesService: InvitesService
  ) {
    this.firebaseService.listenDocuments(PATH, this.updateAll.bind(this));
    this.loadInvites();
  }

  private async loadInvites() {
    const names = await this.invitesService.fetchCampaignNamesById();
    for (const [id, name] of names) {
      this.firebaseService.listenDocument(name, this.update.bind(this, id));
    }
  }

  private updateAll(documents: Document[]) {
    this.campaigns.length = 0;
    for (const document of documents) {
      this.update(document.id, document);
    }
  }

  private update(id: string, document: Document) {
    let campaign = this.campaignsByName.get(id);
    if (campaign) {
      campaign.update(document.data as CampaignData);
    } else {
      campaign = Campaign.fromData(this, document.id, document.data as CampaignData);
      this.campaignsByName.set(id, campaign);
    }

    this.campaignNames.add(campaign.name);
    this.campaigns.push(campaign);
  }

  async loadCharacters(campaign: Campaign): Promise<Character[]> {
    const data = await this.firebaseService.loadDocuments(PATH + '/' + campaign.name + '/characters');
    return data.map((d) => Character.fromData(d.id, d.data as CharacterData));
  }

  async loadAdventures(campaign: Campaign): Promise<Adventure[]> {
    const data = await this.firebaseService.loadDocuments(PATH + '/' + campaign.name + '/adventures');
    return data.map((d) => Adventure.fromData(campaign, d.id, d.data as AdventureData));
  }

  async loadJournal(campaign: Campaign): Promise<JournalEntry[]> {
    const data = await this.firebaseService.loadDocuments(PATH + '/' + campaign.name + '/journal-entries');
    return data.map((d) => JournalEntry.fromData(campaign, d.id, d.data as JournalData));
  }

  async loadEncounters(adventure: Adventure): Promise<Encounter[]> {
    const data = await this.firebaseService.loadDocuments(
      PATH + '/' + adventure.campaign.name + '/adventures/' + adventure.name + '/encounters'
    );

    // Ignore encounters that are stored in the old id format, if they are also available in the new format.
    const ids = new Set<string>(data.map((d) => d.id));
    const encounters = data
      .filter((d) => !ids.has(`${d.data['id']} - ${d.id}`)) // This can be removed if all data is updated to new ids.
      .map((d) => {
        return Encounter.fromData(
          this.spellService,
          this.monsterService,
          this.itemService,
          this.npcService,
          adventure,
          d.id,
          d.data as EncounterData
        );
      });

    return encounters.sort((a, b) => Strings.compareId(a.id, b.id));
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

  async addEncounter(encounter: Encounter) {
    this.firebaseService.saveData(this.generateEncounterId(encounter), encounter.toData());
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

  has(name: string): boolean {
    return this.campaignNames.has(name);
  }

  delete(campaign: Campaign) {
    this.firebaseService.delete(this.generateId(campaign.name));
  }

  deleteEncounter(encounter: Encounter) {
    this.firebaseService.delete(this.generateEncounterId(encounter));
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

  private generateEncounterId(encounter: Encounter): string {
    return this.generateAdventureId(encounter.adventure) + '/encounters/' + encounter.generateStorageId();
  }

  generateAdventureEventId(event: AdventureEvent): string {
    return this.generateId(event.campaign.name) + '/adventure-events/' + event.date.toDateString();
  }

  getCampaign(name: string): Campaign {
    const campaign = this.campaignsByName.get(name);
    if (campaign) {
      return campaign;
    }

    return this.createCampaign(name);
  }

  private createCampaign(name: string): Campaign {
    const campaign = Campaign.create(this, name);
    this.campaignsByName.set(name, campaign);
    return campaign;
  }

  async change(oldCampaign: Campaign | undefined, newCampaign: Campaign) {
    if (oldCampaign && oldCampaign.name !== newCampaign.name) {
      this.delete(oldCampaign);
    }

    await this.add(newCampaign);
  }

  async changeEncounter(oldEncounter: Encounter | undefined, newEncounter: Encounter) {
    if (oldEncounter && oldEncounter.name !== newEncounter.name) {
      this.deleteEncounter(oldEncounter);
    }

    await this.addEncounter(newEncounter);
  }
}
