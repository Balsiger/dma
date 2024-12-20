const EASY = [25, 50, 75, 125, 250, 300, 350, 450, 550, 600, 800, 1000, 1100, 1250, 1400, 1600, 2000, 2100, 2400, 2800];
const MEDIUM = [
  50, 100, 150, 250, 500, 600, 750, 900, 1100, 1200, 1600, 2000, 2200, 2500, 2800, 3200, 3900, 4200, 4900, 5700,
];
const HARD = [
  75, 150, 225, 375, 750, 900, 1100, 1400, 1600, 1900, 2400, 3000, 3400, 3800, 4300, 4800, 5900, 6300, 7300, 8500,
];
const DEADLY = [
  100, 200, 400, 500, 1100, 1400, 1700, 2100, 2400, 2800, 3600, 4500, 5100, 5700, 6400, 7200, 8800, 9500, 10900, 12700,
];

export class Xp {
  static easy(level: number): number {
    if (level < 0 || level > 20) {
      return 0;
    }

    return EASY[level - 1];
  }

  static medium(level: number): number {
    if (level < 0 || level > 20) {
      return 0;
    }

    return MEDIUM[level - 1];
  }

  static hard(level: number): number {
    if (level < 0 || level > 20) {
      return 0;
    }

    return HARD[level - 1];
  }

  static deadly(level: number): number {
    if (level < 0 || level > 20) {
      return 0;
    }

    return DEADLY[level - 1];
  }

  static adjust(party: number, large: number, small: number): number {
    if (party >= 6) {
      return large;
    }

    if (party < small) {
      return small;
    }

    return 0;
  }

  static multiplier(monsters: number, party: number): number {
    if (monsters <= 1) {
      return 1 + Xp.adjust(party, -0.5, +0.5);
    }

    if (monsters === 2) {
      return 1.5 + Xp.adjust(party, -0.5, +0.5);
    }

    if (monsters <= 6) {
      return 2 + Xp.adjust(party, -0.5, +0.5);
    }

    if (monsters <= 10) {
      return 2.5 + Xp.adjust(party, -0.5, +0.5);
    }

    if (monsters <= 14) {
      return 3 + Xp.adjust(party, -0.5, +0.5);
    }

    return 4 + Xp.adjust(party, -1, +1);
  }
}
