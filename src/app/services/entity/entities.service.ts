import { Injectable } from '@angular/core';
import { EntityStorage } from '../../data/facts/entity-storage';
import { ItemService } from './item.service';

const FILES = [
  "/assets/data/products/Player's Handbook.pb",
  "/assets/data/products/Dungeon Master's Guide.pb",
  '/assets/data/products/Monster Manual.pb',
  "/assets/data/products/Volo's Guide to Monsters.pb",
  '/assets/data/products/Waterdeep - Dragon Heist.pb',
  '/assets/data/products/Waterdeep - Dungeon of the Mad Mage.pb',
  '/assets/data/products/Monsters of the Multiverse.pb',
  "/assets/data/products/VeX's Complete Expanded Dungeon of the Mad Mage.pb",
  '/assets/data/products/Skullport - Shadow of Waterdeep.pb',
];

@Injectable({
  providedIn: 'root',
})
export class EntitiesService {
  // TODO(Merlin): This needs to be keyed by settings in the user (if we want to be able to reduce memory usage
  // and loading times).
  private readonly entities = new EntityStorage(this.itemService, FILES);
  readonly monsters = this.entities.monsters;
  readonly npcs = this.entities.npcs;
  readonly conditions = this.entities.conditions;

  constructor(private readonly itemService: ItemService) {}

  async ensureLoaded() {
    await this.entities.load();
  }
}
