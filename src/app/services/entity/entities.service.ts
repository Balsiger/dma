import { Injectable } from '@angular/core';
import { EntityStorage } from '../../data/facts/entity-storage';

export interface Asset {
  name: string;
  file: string;
}

export const ASSETS: Asset[] = [
  { name: "Player's Handbook", file: "/assets/data/products/Player's Handbook.pb" },
  { name: "Dungeon Master's Guide", file: "/assets/data/products/Dungeon Master's Guide.pb" },
  { name: 'Monster Manual', file: '/assets/data/products/Monster Manual.pb' },
  { name: "Volo's Guide to Monsters", file: "/assets/data/products/Volo's Guide to Monsters.pb" },
  { name: 'Waterdeep - Dragon Heist', file: '/assets/data/products/Waterdeep - Dragon Heist.pb' },
  { name: 'Waterdeep - Dungeon of the Mad Mage', file: '/assets/data/products/Waterdeep - Dungeon of the Mad Mage.pb' },
  { name: 'Monsters of the Multiverse', file: '/assets/data/products/Monsters of the Multiverse.pb' },
  { name: "Xanathar's Guide to Everything", file: "/assets/data/products/Xanathar's Guide to Everything.pb" },
  { name: 'Blue Alley', file: '/assets/data/products/Blue Alley.pb' },
  {
    name: "VeX's Complete Expanded Dungeon of the Mad Mage",
    file: "/assets/data/products/VeX's Complete Expanded Dungeon of the Mad Mage.pb",
  },
  { name: 'Skullport - Shadow of Waterdeep', file: '/assets/data/products/Skullport - Shadow of Waterdeep.pb' },
  { name: 'DMA', file: '/assets/data/products/DMA.pb' },
];

@Injectable({
  providedIn: 'root',
})
export class EntitiesService {
  // TODO(Merlin): This needs to be keyed by settings in the user (if we want to be able to reduce memory usage
  // and loading times).
  private readonly entities = new EntityStorage(ASSETS.map((a) => a.file));
  readonly monsters = this.entities.monsters;
  readonly npcs = this.entities.npcs;
  readonly conditions = this.entities.conditions;
  readonly items = this.entities.items;
  readonly spells = this.entities.spells;
  readonly products = this.entities.products;
  readonly maps = this.entities.maps;
  readonly tokens = this.entities.tokens;
  readonly miniatures = this.entities.miniatures;

  constructor() {}

  async ensureLoaded() {
    await this.entities.load();
  }
}
