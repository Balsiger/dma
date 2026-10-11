import { computed, signal } from '@angular/core';
import { FluidCharacterService } from '../../../services/fluid/character.service';
import { Link } from '../../values/link';
import { Fluid } from './fluid';

export interface RenownData {
  group: string;
  renown: number;
}

export interface FluidCharacterData {
  image?: string;
  profile?: string;
  levels?: string[];
  initiativeSound: string;
  days_without_drink?: number;
  days_without_food?: number;
  renown?: RenownData[];
}

export class Renown {
  constructor(
    readonly group: string,
    readonly renown: number,
  ) {}

  toData(): RenownData {
    return {
      group: this.group,
      renown: this.renown,
    };
  }

  static fromData(data: RenownData) {
    return new Renown(data.group, data.renown);
  }
}

export const EMPTY_RENOWN = new Renown('', 0);

export class FluidCharacter extends Fluid<FluidCharacterData, FluidCharacterService> {
  name = signal<string>('');
  image = signal<Link>(Link.EMPTY);
  profile = signal<Link>(Link.EMPTY);
  levels = signal<string[]>([]);
  initiativeSound = signal<string>('');
  levelSummary = computed(() => FluidCharacter.computeSummary(this.levels()));
  daysWithoutDrink = signal<number>(0);
  daysWithoutFood = signal<number>(0);
  rewnown = signal<Renown[]>([]);

  constructor(service: FluidCharacterService, name: string, data: FluidCharacterData) {
    super(service);

    this.name.set(name);
    this.update(data);
  }

  static fromData(characterService: FluidCharacterService, name: string, data: FluidCharacterData): FluidCharacter {
    return new FluidCharacter(characterService, name, data);
  }

  toData(): FluidCharacterData {
    return {
      image: this.image().url,
      profile: this.profile().url,
      levels: this.levels(),
      initiativeSound: this.initiativeSound(),
      days_without_drink: this.daysWithoutDrink(),
      days_without_food: this.daysWithoutFood(),
      renown: this.rewnown().map((r) => r.toData()),
    };
  }

  override update(data: FluidCharacterData): void {
    this.image.set(new Link(this.name(), data.image || ''));
    this.profile.set(new Link(this.name(), data.profile || ''));
    this.levels.set(data.levels || []);
    this.initiativeSound.set(data.initiativeSound || '');
    this.daysWithoutDrink.set(data.days_without_drink || 0);
    this.daysWithoutFood.set(data.days_without_food || 0);
    this.rewnown.set(data.renown?.map((r) => Renown.fromData(r)) ?? []);
  }

  override buildDocumentId(): string {
    return this.name();
  }

  daysPassed(days: number) {
    this.daysWithoutDrink.update((d) => d + days);
    this.daysWithoutFood.update((d) => d + days);
    this.save();
  }

  drink() {
    this.daysWithoutDrink.set(0);
    this.save();
  }

  eat() {
    this.daysWithoutFood.set(0);
    this.save();
  }

  private static computeSummary(levels: string[]): string {
    const countByClass = new Map<string, number>();

    for (const level of levels) {
      countByClass.set(level, (countByClass.get(level) || 0) + 1);
    }

    let summary = '';
    countByClass.forEach((count, level) => (summary += ` ${this.shortenLevel(level)} ${count}`));

    return summary.trim();
  }

  private static shortenLevel(level: string): string {
    switch (level) {
      case 'Barbarian':
        return 'Brb';
      case 'Bard':
        return 'Brd';
      case 'Cleric':
        return 'Clr';
      case 'Druid':
        return 'Drd';
      case 'Fighter':
        return 'Ftr';
      case 'Monk':
        return 'Mnk';
      case 'Paladin':
        return 'Pal';
      case 'Ranger':
        return 'Rng';
      case 'Rogue':
        return 'Rog';
      case 'Sorcerer':
        return 'Src';
      case 'Warlock':
        return 'Wlk';
      case 'Wizard':
        return 'Wiz';

      default:
        return level;
    }
  }
}
