import { computed, signal } from '@angular/core';
import { CharacterService } from '../../services/fact/character.service';
import { Link } from '../values/link';
import { Campaign } from './campaign';
import { Fact } from './fact';

export interface Data {
  image?: string;
  levels?: string[];
  initiativeSound: string;
}

export class Character extends Fact<Data, CharacterService> {
  name = signal<string>('');
  image = signal<Link>(Link.EMPTY);
  levels = signal<string[]>([]);
  initiaveSound = signal<string>('');
  levelSummary = computed(() => Character.computeSummary(this.levels()));

  constructor(
    service: CharacterService,
    readonly campaign: Campaign,
    name: string,
    data: Data,
  ) {
    super(service);

    this.name.set(name);
    this.update(data);
  }

  static fromData(campaign: Campaign, characterService: CharacterService, name: string, data: Data): Character {
    return new Character(characterService, campaign, name, data);
  }

  toData(): Data {
    return {
      image: this.image().url,
      levels: this.levels(),
      initiativeSound: this.initiaveSound(),
    };
  }

  override update(data: Data): void {
    this.image.set(new Link(this.name(), data.image || ''));
    this.levels.set(data.levels || []);
    this.initiaveSound.set(data.initiativeSound || '');
  }

  override buildDocumentId(): string {
    return this.name();
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
