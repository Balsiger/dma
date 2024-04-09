import { Injectable } from '@angular/core';
import { Adventure } from '../../data/facts/adventure';
import { Data, Encounter } from '../../data/facts/encounter';
import { Strings } from '../../data/strings';
import { ItemService } from '../entity/item.service';
import { MonsterService } from '../entity/monster.service';
import { NpcService } from '../entity/npc.service';
import { SpellService } from '../entity/spell.service';
import { FirebaseService } from '../firebase.service';
import { AdventureService } from './adventure.service';

const PATH = 'encounters';

@Injectable({ providedIn: 'root' })
export class EncounterService {
  constructor(
    private readonly firebase: FirebaseService,
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService,
    private readonly itemService: ItemService,
    private readonly npcService: NpcService,
  ) {}

  async load(adventure: Adventure): Promise<Encounter[]> {
    const data = await this.firebase.loadDocuments(AdventureService.buildPath(adventure) + '/encounters');

    // Ignore encounters that are stored in the old id format, if they are also available in the new format.
    const ids = new Set<string>(data.map((d) => d.id));
    const encounters = data
      .filter((d) => !ids.has(`${d.data['id']} - ${d.id}`)) // This can be removed if all data is updated to new ids.
      .map((d) => {
        return Encounter.fromData(
          this,
          this.spellService,
          this.monsterService,
          this.itemService,
          this.npcService,
          adventure,
          d.id,
          d.data as Data,
        );
      });

    return encounters.sort((a, b) => Strings.compareId(a.id, b.id));
  }

  async update(old: Encounter | undefined, updated: Encounter) {
    if (old && old.generateStorageId() !== updated.generateStorageId()) {
      this.delete(old);
    }

    await this.save(updated);
  }

  async delete(encounter: Encounter) {
    await this.firebase.delete(EncounterService.buildPath(encounter));
  }

  async save(encounter: Encounter) {
    await this.firebase.saveData(EncounterService.buildPath(encounter), encounter.toData());
  }

  static buildPath(encounter: Encounter): string {
    return AdventureService.buildPath(encounter.adventure) + '/' + PATH + '/' + encounter.generateStorageId();
  }
}
