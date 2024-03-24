import { WritableSignal, signal } from '@angular/core';
import { CampaignsService } from '../../services/campaigns.service';
import { Loading } from '../../services/loading';
import { AdventureEvent } from '../../ui/pages/campaign/journal/adventure-event';
import { JournalEntry } from '../../ui/pages/campaign/journal/journal-entry';
import { CampaignNPC, NPCState } from '../entities/npc';
import { EMPTY as DATE_TIME_EMPTY, DateTime } from '../values/date-time';
import { Adventure } from './adventure';
import { Character } from './character';

const CURRENT_EVENTS_BEFORE = 2;
const CURRENT_EVENTS_AFTER = 5;

export interface Data {
  image: string;
  time: string;
  date: string;
  screenImage: string;
  round: number;
  map: string;
  mapLayers: string[];
  mapPosition: number[];
  mapRotation: number;
  adventure: string;
}

export class Campaign extends Loading {
  adventure: WritableSignal<Adventure | undefined> = signal(undefined);
  characters: Character[] = [];
  adventures: Adventure[] = [];
  journal: JournalEntry[] = [];
  adventureEvents: AdventureEvent[] = [];
  currentEvents: AdventureEvent[] = [];
  npcsByName = new Map<String, CampaignNPC>();
  locations: string[] = [];
  locations$ = signal<string[]>([]);
  map$ = signal<string>('');

  constructor(
    public readonly service: CampaignsService | undefined,
    public readonly name: string,
    public image: string,
    public dateTime: DateTime,
    public screenImage: string,
    public round: number,
    public map: string,
    public mapLayers: string[],
    public mapPosition: number[],
    public mapRotation: number,
    public adventureName: string,
  ) {
    super();

    this.init();
  }

  private async init() {
    this.updateLocations();
    this.map$.set(this.map);
    this.adventure.set(await this.getAdventure(this.adventureName));
  }

  private async updateLocations() {
    this.locations = this.map.split('/');
    this.locations$.set(this.map.split('/'));
  }

  update(data: Data) {
    this.image = data.image;
    this.dateTime = DateTime.fromStrings(data.date, data.time);
    this.screenImage = data.screenImage;
    this.round = data.round;
    this.map = data.map;
    this.mapLayers = data.mapLayers;
    this.mapPosition = data.mapPosition;
    this.mapRotation = data.mapRotation;
    this.adventureName = data.adventure;

    this.init();
  }

  static fromData(campaignsService: CampaignsService, name: string, data: Data): Campaign {
    return new Campaign(
      campaignsService,
      name,
      data.image || '',
      DateTime.fromStrings(data.date || '', data.time || ''),
      data.screenImage || '',
      data.round || 0,
      data.map || '',
      data.mapLayers || [],
      data.mapPosition || [],
      data.mapRotation || 0,
      data.adventure || '',
    );
  }

  toData(): Data {
    return {
      image: this.image || '',
      time: this.dateTime.toTimeString(),
      date: this.dateTime.toDateString(),
      screenImage: this.screenImage,
      round: this.round,
      map: this.map || '',
      mapLayers: this.mapLayers || [],
      mapPosition: this.mapPosition || [],
      mapRotation: this.mapRotation,
      adventure: this.adventureName || '',
    };
  }

  protected async doLoad() {
    if (this.service) {
      this.characters = await this.service.loadCharacters(this);
      this.reloadAdventures();
      this.reloadJournal();
      this.reloadEvents();

      const npcs = await this.service.loadNPCs(this);
      for (const npc of npcs) {
        this.npcsByName.set(npc.name, npc);
      }

      this.journal.sort((a, b) => a.campaignDate.localeCompare(b.campaignDate));

      // Ensure we have an entry at the current date, assuming that the journal is properly sorted.
      if (!this.journal.length || this.journal[this.journal.length - 1].campaignDate !== this.dateTime.toDateString()) {
        this.journal.push(new JournalEntry(this, this.dateTime.toDateString(), [], []));
      }
    }
  }

  async reloadEvents() {
    if (this.service) {
      this.adventureEvents = await this.service.loadAdventureEvents(this);
      this.currentEvents = this.computeCurrentEvents(this.adventureEvents);
    }
  }

  async reloadAdventures() {
    if (this.service) {
      this.adventures = await this.service.loadAdventures(this);
    }
  }

  async reloadJournal() {
    if (this.service) {
      this.journal = await this.service.loadJournal(this);
    }
  }

  async getAdventure(name: string | null): Promise<Adventure | undefined> {
    await this.load();
    for (const adventure of this.adventures) {
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

  advanceTime(hours: number, minutes: number) {
    this.dateTime = this.dateTime.advanceTime(hours, minutes);
    this.save();
  }

  advanceDate(years: number, days: number) {
    this.dateTime = this.dateTime.advanceDate(years, days);
    this.save();
  }

  advanceTimeSunrise() {
    this.dateTime = this.dateTime.advanceSunrise();
    this.save();
  }

  advanceTimeNoon() {
    this.dateTime = this.dateTime.advanceNoon();
    this.save();
  }

  advanceTimeSunset() {
    this.dateTime = this.dateTime.advanceSunset();
    this.save();
  }

  advanceTimeMidnight() {
    this.dateTime = this.dateTime.advanceMidnight();
    this.save();
  }

  addRound(value: number) {
    this.round += value;
    this.save();
  }

  startBattle() {
    this.round = 1;
    this.save();
  }

  endBattle() {
    this.round = 0;
    this.save();
  }

  setScreenImage(image: string) {
    this.screenImage = image;
    this.save();
  }

  setMap(map: string) {
    this.map = map;
    this.map$.set(map);
    this.mapLayers = [];
    this.mapPosition = [0, 0];
    this.updateLocations();
    this.save();
  }

  setMapLayers(layers: string[]) {
    this.mapLayers = [...layers];
    this.save();
  }

  setMapPosition(x: number, y: number) {
    this.mapPosition = [x, y];
    this.save();
  }

  setMapRotation(rotation: number) {
    this.mapRotation = rotation;
    this.save();
  }

  async setAdventure(name: string) {
    this.adventureName = name;
    this.save();

    this.adventure.set(await this.getAdventure(this.adventureName));
  }

  private computeCurrentEvents(events: AdventureEvent[]): AdventureEvent[] {
    if (events.length < CURRENT_EVENTS_BEFORE + CURRENT_EVENTS_AFTER) {
      return events;
    }

    const before = events.filter((e) => e.date.isBefore(this.dateTime));
    const after = events.filter((e) => !e.date.isBefore(this.dateTime));

    return [...before.slice(-CURRENT_EVENTS_BEFORE, before.length), ...after.slice(0, CURRENT_EVENTS_AFTER)];
  }

  private save() {
    // THIS WILL NOT WORK IF THE NAME HAS CHANGED!!!
    this.service?.change(this, this);
  }

  static create(campaignsService: CampaignsService, name: string): Campaign {
    return new Campaign(campaignsService, name, '', DATE_TIME_EMPTY, '', 0, '', [], [], 0, '');
  }
}

export const EMPTY = new Campaign(undefined, '', '', DATE_TIME_EMPTY, '', 0, '', [], [], 0, '');
