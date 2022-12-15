import { CampaignsService } from '../../services/campaigns.service';
import { AdventureEvent } from '../../ui/pages/campaign/journal/adventure-event';
import { JournalEntry } from '../../ui/pages/campaign/journal/journal-entry';
import { DateTime, EMPTY as DATE_TIME_EMPTY } from '../values/date-time';
import { Adventure } from './adventure';
import { Character } from './character';

export interface Data {
  image: string;
  time: string;
  date: string;
  screenImage: string;
  round: number;
  map: string;
  mapLayers: string[];
  mapPosition: number[];
}

export class Campaign {
  characters: Character[] = [];
  adventures: Adventure[] = [];
  journal: JournalEntry[] = [];
  adventureEvents: AdventureEvent[] = [];

  constructor(
    public readonly service: CampaignsService | undefined,
    public readonly name: string,
    public image: string,
    public dateTime: DateTime,
    public screenImage: string,
    public round: number,
    public map: string,
    public mapLayers: string[],
    public mapPosition: number[]
  ) {}

  update(data: Data) {
    this.image = data.image;
    this.dateTime = DateTime.fromStrings(data.date, data.time);
    this.screenImage = data.screenImage;
    this.round = data.round;
    this.map = data.map;
    this.mapLayers = data.mapLayers;
    this.mapPosition = data.mapPosition;
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
      data.mapPosition || []
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
    };
  }

  async load() {
    if (this.service) {
      this.characters = await this.service.loadCharacters(this);
      this.adventures = await this.service.loadAdventures(this);
      this.journal = await this.service.loadJournal(this);
      this.adventureEvents = await this.service.loadAdventureEvents(this);

      this.journal.sort((a, b) => a.campaignDate.localeCompare(b.campaignDate));

      // Ensure we have an entry at the current date, assuming that the journal is properly sorted.
      if (!this.journal.length || this.journal[this.journal.length - 1].campaignDate !== this.dateTime.toDateString()) {
        this.journal.push(new JournalEntry(this, this.dateTime.toDateString(), [], []));
      }
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

  private save() {
    // THIS WILL NOT WORK IF THE NAME HAS CHANGED!!!
    this.service?.change(this, this);
  }

  static create(campaignsService: CampaignsService, name: string): Campaign {
    return new Campaign(campaignsService, name, '', DATE_TIME_EMPTY, '', 0, '', [], []);
  }
}

export const EMPTY = new Campaign(undefined, '', '', DATE_TIME_EMPTY, '', 0, '', [], []);
