import { Version } from '../data/entities/values/enums/version';

const LABELS = new Map<Version, Map<string, string>>([
  [
    Version.DND_5,
    new Map<string, string>([
      ['ac', 'Armor Class:'],
      ['hp', 'Hit Points:'],
      ['speed', 'Speed:'],
      ['initiative', 'Initiative:'],
    ]),
  ],
  [
    Version.DND_5_24,
    new Map<string, string>([
      ['ac', 'AC'],
      ['hp', 'HP'],
      ['speed', 'Speed'],
      ['initiative', 'Initiative'],
    ]),
  ],
]);

export class Versioning {
  static getLabel(id: string, version: Version): string {
    return LABELS.get(version)?.get(id) || id;
  }
}
