import { computed, signal } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { AdventureService } from '../../services/fact/adventure.service';
import { CampaignService } from '../../services/fact/campaign.service';
import { AdventureEvent } from '../../ui/pages/campaign/journal/adventure-event';
import { JournalEntry } from '../../ui/pages/campaign/journal/journal-entry';
import { CampaignNPC, NPCState } from '../entities/npc';
import { EMPTY as DATE_TIME_EMPTY, DateTime } from '../entities/values/date-time';
import { Adventure } from './adventure';
import { Fact } from './fact';
import { MapInfo } from './map_info';

const CURRENT_EVENTS_BEFORE = 2;
const CURRENT_EVENTS_AFTER = 5;

export interface Data {
  image?: string;
  time?: string;
  date?: string;
  screenImage?: string;
  round?: number;
  map?: string;
  mapLayers?: string[];
  mapPosition?: number[];
  mapRotation?: number;
  adventure?: string;
}

export class Campaign extends Fact<Data, CampaignService> {
  private readonly adventureService: AdventureService;
  private readonly characterService: CharacterService;

  characters = computed(() => this.characterService.facts());
  adventures = computed(() => this.adventureService.facts());
  journals = signal<JournalEntry[]>([]);
  adventureEvents = signal<AdventureEvent[]>([]);
  currentEvents = computed(() => this.computeCurrentEvents(this.adventureEvents()));
  locations = computed(() => this.map().name.split('/'));

  adventure = computed(() => (this.adventureName() ? this.adventureService.get(this.adventureName()) : undefined));
  image = signal<string>('');
  dateTime = signal<DateTime>(DATE_TIME_EMPTY);
  screenImage = signal<string>('');
  round = signal<number>(0);
  map = signal<MapInfo>(new MapInfo('', [], 0, 0, 0));
  adventureName = signal<string>('');

  private npcsByName = new Map<String, CampaignNPC>();

  constructor(
    private readonly campaignService: CampaignService,
    public readonly name: string,
    data: Data,
  ) {
    super(campaignService);

    this.adventureService = this.campaignService.createAdventureService(this);
    this.characterService = this.campaignService.createCharacterService(this);

    this.update(data);
  }

  override buildDocumentId(): string {
    return this.name;
  }

  override update(data: Data) {
    this.image.set(data.image || '');
    this.dateTime.set(DateTime.fromStrings(data.date || '', data.time || ''));
    this.screenImage.set(data.screenImage || '');
    this.round.set(data.round || 0);
    this.map.set(MapInfo.fromData(data));
    this.adventureName.set(data.adventure || '');
  }

  override toData(): Data {
    return {
      image: this.image(),
      time: this.dateTime().toTimeString(),
      date: this.dateTime().toDateString(),
      screenImage: this.screenImage(),
      round: this.round(),
      map: this.map().name,
      mapLayers: this.map().layers || [],
      mapPosition: [this.map().x, this.map().y],
      mapRotation: this.map().rotation,
      adventure: this.adventure()?.name || '',
    };
  }

  static fromData(campaignService: CampaignService, name: string, data: Data): Campaign {
    return new Campaign(campaignService, name, data);
  }

  protected async doLoad() {
    console.log('~~do load called');
    //this.characters.set(await this.characterService.loadCharacters(this));
    this.reloadJournal();
    this.reloadEvents();

    const npcs = await this.campaignService.loadNPCs(this);
    for (const npc of npcs) {
      this.npcsByName.set(npc.name, npc);
    }
  }

  async getAdventure(name: string | null): Promise<Adventure | undefined> {
    await this.load();
    for (const adventure of this.adventures()) {
      if (adventure.name === name) {
        return adventure;
      }
    }

    return undefined;
  }

  async getNPC(name: string): Promise<CampaignNPC> {
    await this.load();
    let npc = this.npcsByName.get(name);
    if (!npc) {
      npc = new CampaignNPC(name, NPCState.alive, '');
      this.npcsByName.set(name, npc);
    }

    return npc;
  }

  async advanceTime(hours: number, minutes: number) {
    this.dateTime.set(this.dateTime().advanceTime(hours, minutes));
    await this.save();
  }

  async advanceDate(years: number, days: number) {
    this.dateTime.set(this.dateTime().advanceDate(years, days));
    await this.save();
  }

  async advanceTimeSunrise() {
    this.dateTime.set(this.dateTime().advanceSunrise());
    await this.save();
  }

  async advanceTimeNoon() {
    this.dateTime.set(this.dateTime().advanceNoon());
    await this.save();
  }

  async advanceTimeSunset() {
    this.dateTime.set(this.dateTime().advanceSunset());
    await this.save();
  }

  async advanceTimeMidnight() {
    this.dateTime.set(this.dateTime().advanceMidnight());
    await this.save();
  }

  async addRound(value: number) {
    this.round.update((r) => r + value);
    await this.save();
  }

  async startBattle() {
    this.round.set(1);
    await this.save();
  }

  async endBattle() {
    this.round.set(0);
    await this.save();
  }

  async setScreenImage(image: string) {
    this.screenImage.set(image);
    await this.save();
  }

  async setMap(map: string) {
    this.map.set(new MapInfo(map, [], 0, 0, 0));
    await this.save();
  }

  async setMapLayers(layers: string[]) {
    this.map.update((m) => m.withLayers(layers));
    await this.save();
  }

  async setMapPosition(x: number, y: number) {
    this.map.update((m) => m.withPosition(x, y));
    await this.save();
  }

  async setMapRotation(rotation: number) {
    this.map.update((m) => m.withRotation(rotation));
    await this.save();
  }

  async setAdventure(adventure: Adventure) {
    this.adventureName.set(adventure.name);
    await this.save();
  }

  async deleteAdventure(adventure: Adventure) {
    await this.campaignService.deleteAdventure(adventure);
  }

  async addEvent(event: AdventureEvent) {
    if (event.notes) {
      await this.campaignService.setAdventureEvent(event);
    } else {
      await this.campaignService.deleteAdventureEvent(event);
    }

    await this.reloadEvents();
  }

  async setJournalEntry(entry: JournalEntry) {
    await this.campaignService.setJournalEntry(entry);
    await this.reloadJournal();
  }

  private async reloadEvents() {
    this.adventureEvents.set(await this.campaignService.loadAdventureEvents(this));
  }

  private async reloadJournal() {
    const journal = await this.campaignService.loadJournal(this);
    journal.sort((a, b) => a.campaignDate.localeCompare(b.campaignDate));

    // Ensure we have an entry at the current date, assuming that the journal is properly sorted.
    if (!journal.length || journal[journal.length - 1].campaignDate !== this.dateTime().toDateString()) {
      journal.push(new JournalEntry(this, this.dateTime().toDateString(), [], []));
    }

    this.journals.set(journal);
  }

  private computeCurrentEvents(events: AdventureEvent[]): AdventureEvent[] {
    if (events.length < CURRENT_EVENTS_BEFORE + CURRENT_EVENTS_AFTER) {
      return events;
    }

    const before = events.filter((e) => e.date.isBefore(this.dateTime()));
    const after = events.filter((e) => !e.date.isBefore(this.dateTime()));

    return [...before.slice(-CURRENT_EVENTS_BEFORE, before.length), ...after.slice(0, CURRENT_EVENTS_AFTER)];
  }
}

export const EMPTY_MAP_INFO = new MapInfo('', [], 0, 0, 0);
