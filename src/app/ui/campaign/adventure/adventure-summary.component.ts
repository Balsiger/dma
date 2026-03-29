import { Component, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Multimap } from '../../../../common/multimap';
import { Encounter } from '../../../data/combined/encounter';
import { NPC } from '../../../data/combined/npc';
import { Monster } from '../../../data/entities/monster';
import { Adventure } from '../../../data/facts/adventure';
import { NPCState } from '../../../data/facts/npc-fact';

export interface LocationData {
  encounter?: Encounter;
  selection: MiniatureSelection;
  done: boolean;
  available: boolean;
}

@Component({
  selector: 'adventure-summary',
  templateUrl: './adventure-summary.component.html',
  styleUrls: ['./adventure-summary.component.scss'],
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
})
export class AdventureSummaryComponent {
  readonly adventure = input<Adventure>();
  readonly linkToPrintable = input(true);

  readonly miniaturesByLocation = computed(() => this.computeMinis());
  readonly assignedMonsters = computed(() => this.computeAssignedMonsters());
  readonly missingByEncounter = computed(() => this.computeMissing());
  readonly missingNPCs = computed(() => this.computeMissingNpcs());
  readonly locations = computed(() => Array.from(this.miniaturesByLocation().keys()).sort());

  availableRegExp = model<string>('');
  available = computed(() => new RegExp(this.availableRegExp(), 'i'));

  computeMinis(): Multimap<string, LocationData> {
    const minis = new Multimap<string, LocationData>();

    if (this.adventure()) {
      for (const encounter of this.adventure()!.encounters()) {
        for (const selections of encounter.miniatures().values()) {
          for (const selection of selections) {
            minis.set(selection.location, {
              encounter: encounter,
              selection,
              done: encounter.isFinished(),
              available: false,
            });
          }
        }
      }

      // NPCs.
      for (const npc of this.adventure()?.campaign?.npcs() ?? []) {
        for (const selection of npc.miniature()) {
          minis.set(selection.location, {
            selection,
            done: npc.state() === NPCState.dead,
            available: false,
          });
        }
      }
    }

    for (const name of minis.keys()) {
      const locations = minis.get(name);
      if (locations) {
        if (this.availableRegExp()) {
          for (const location of locations) {
            location.available = this.isAvailable(location.encounter?.shortName ?? '');
          }
        }

        for (const location of locations) {
          location.available = this.isCovered(location, locations);
        }
      }
    }

    return minis;
  }

  private isAvailable(encounterName: string): boolean {
    return !!encounterName && this.available().test(encounterName);
  }

  private isCovered(location: LocationData, locations: LocationData[]): boolean {
    if (location.available) {
      return true;
    }

    for (const other of locations) {
      if (
        other.available &&
        location.selection.miniature === other.selection.miniature &&
        other.selection.count >= location.selection.count
      ) {
        return true;
      }
    }

    return false;
  }

  computeAssignedMonsters(): Set<string> {
    const monsters = new Set<string>();
    for (const encounter of this.adventure()!.encounters()) {
      for (const selections of encounter.miniatures().values()) {
        for (const selection of selections) {
          monsters.add(selection.monster);
        }
      }
    }

    return monsters;
  }

  computeMissing(): Map<Encounter, Monster[]> {
    const missing = new Map<Encounter, Monster[]>();

    for (const encounter of this.adventure()!.encounters()) {
      if (!encounter.isFinished()) {
        for (const monster of encounter.monsters ?? []) {
          if (!this.assignedMonsters().has(monster.entity.name)) {
            let monsters = missing.get(encounter);
            if (!monsters) {
              monsters = [];
              missing.set(encounter, monsters);
            }

            if (monster.entity) {
              monsters.push(monster.entity);
            }
          }
        }
      }
    }

    return missing;
  }

  computeMissingNpcs(): NPC[] {
    return (
      this.adventure()
        ?.campaign.npcs()
        .filter((n) => !!n.miniature) ?? []
    );
  }
}
