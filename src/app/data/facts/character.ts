import { computed, signal } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Fact } from './fact';

export interface Data {
  image: string;
  levels: string[];
}

export class Character extends Fact<Data, CharacterService> {
  name = signal<string>('');
  image = signal<string>('');
  levels = signal<string[]>([]);
  levelSummary = computed(() => Character.computeSummary(this.levels()));

  constructor(name: string, image: string, levels: string[]) {
    // TODO: use proper character service.
    super(null as any as CharacterService);

    this.name.set(name);
    this.image.set(image);
    this.levels.set(levels);
  }

  static fromData(name: string, data: Data): Character {
    return new Character(name, data.image, data.levels);
  }

  toData(): Data {
    return {
      image: this.image(),
      levels: this.levels(),
    };
  }

  override update(data: Data): void {
    this.image.set(data.image);
    this.levels.set(data.levels);
  }

  override buildDocumentId(): string {
    return this.name();
  }

  protected override doLoad() {
    // No dependent data.
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
