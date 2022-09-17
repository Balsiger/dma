import { CampaignsService } from '../services/campaigns.service';
import { Adventure } from './adventure';
import { Character } from './character';
import { DateTime, EMPTY as DATE_TIME_EMPTY } from './date-time';

export interface Data {
  image: string;
  time: string;
  date: string;
  screenImage: string;
}

export class Campaign {
  characters: Character[] = [];
  adventures: Adventure[] = [];

  constructor(
    public readonly service: CampaignsService | undefined,
    public readonly name: string,
    public image: string,
    public dateTime: DateTime,
    public screenImage: string
  ) {}

  update(data: Data) {
    this.image = data.image;
    this.dateTime = DateTime.fromStrings(data.date, data.time);
    this.screenImage = data.screenImage;
  }

  static fromData(campaignsService: CampaignsService, name: string, data: Data): Campaign {
    return new Campaign(
      campaignsService,
      name,
      data.image,
      DateTime.fromStrings(data.date, data.time),
      data.screenImage
    );
  }

  toData(): Data {
    return {
      image: this.image,
      time: this.dateTime.toTimeString(),
      date: this.dateTime.toDateString(),
      screenImage: this.screenImage,
    };
  }

  async load() {
    if (this.service) {
      this.characters = await this.service.loadCharacters(this);
      this.adventures = await this.service.loadAdventures(this);
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

  /** @deprecated */
  withScreenImage(image: string): Campaign {
    return new Campaign(this.service, this.name, this.image, this.dateTime, image);
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

  private save() {
    // THIS WILL NOT WORK IF THE NAME HAS CHANGED!!!
    this.service?.change(this, this);
  }
}

export const EMPTY = new Campaign(undefined, '', '', DATE_TIME_EMPTY, '');
