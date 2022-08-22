import { Rarity, Size } from './miniature';


export interface FilterData {
  name: string;
  rarities: Rarity[];
  sizes: Size[];
  types: string[];
  subtypes: string[];
  races: string[];
  classes: string[];
  locations: string[];
  sets: string[];
}
