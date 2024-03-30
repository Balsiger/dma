export interface Data {
  image: string;
  levels: string[];
}

export class Character {
  levelSummary: string;

  constructor(
    readonly name: string,
    readonly image: string,
    readonly levels: string[],
  ) {
    this.levelSummary = this.computeSummary(levels);
  }

  static fromData(name: string, data: Data): Character {
    return new Character(name, data.image, data.levels);
  }

  toData(): Data {
    return {
      image: this.image,
      levels: this.levels,
    };
  }

  private computeSummary(levels: string[]): string {
    const countByClass = new Map<string, number>();

    for (const level of levels) {
      countByClass.set(level, (countByClass.get(level) || 0) + 1);
    }

    let summary = '';
    countByClass.forEach((count, level) => (summary += ` ${this.shortenLevel(level)} ${count}`));

    return summary.trim();
  }

  private shortenLevel(level: string): string {
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
