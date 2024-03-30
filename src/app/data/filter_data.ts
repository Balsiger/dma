import { Rarity } from './entities/values/enums/rarity';
import { Size } from './entities/values/size';

export const EMPTY: FilterData = {
  name: '',
  rarities: [],
  sizes: [],
  types: [],
  subtypes: [],
  races: [],
  classes: [],
  locations: [],
  sets: [],
};

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
