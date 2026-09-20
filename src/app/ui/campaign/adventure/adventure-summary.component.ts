import { Component, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Multimap } from '../../../../common/multimap';
import { Encounter } from '../../../data/combined/encounter';
import { NPC } from '../../../data/combined/npc';
import { Adventure } from '../../../data/entities/fluid/adventure';
import { NPCState } from '../../../data/entities/fluid/npc-fact';
import { Monster } from '../../../data/entities/static/monster';
import { MiniatureSelection } from '../../../data/values/miniature-selection';

export interface LocationData {
  encounter?: Encounter;
  selection: MiniatureSelection;
  done: boolean;
  available: boolean;
}

interface Usage {
  encounter?: Encounter;
  selection: MiniatureSelection;
  done: boolean;
  available: boolean;
}

export class Mini {
  count = 0;
  readonly usages: Usage[] = [];

  constructor(
    readonly name: string,
    readonly location: string,
  ) {}

  add(selection: MiniatureSelection, done: boolean, available: boolean, encounter?: Encounter) {
    this.usages.push({ encounter, selection, done, available });

    this.update();
  }

  private update() {
    let neededCount = 0;
    let availableCount = 0;
    const neededEncounters = new Set<string>();
    for (const usage of this.usages) {
      if (!usage.done) {
        if (
          usage.encounter &&
          (neededEncounters.has(usage.encounter.id()) || usage.encounter.linked.some((e) => neededEncounters.has(e)))
        ) {
          neededCount += usage.selection.count;
          usage.encounter.linked.forEach((l) => neededEncounters.add(l));
        } else {
          if (usage.selection.count > neededCount) {
            neededCount = usage.selection.count;
            neededEncounters.clear();
            if (usage.encounter) {
              neededEncounters.add(usage.encounter.id());
              usage.encounter.linked.forEach((l) => neededEncounters.add(l));
            }
          }
        }
      }
      if (usage.available) {
        availableCount = Math.max(availableCount, usage.selection.count);
      }
    }

    this.count = neededCount - availableCount;
  }
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

  readonly minisByLocation = computed(() => this.computeMinisByLocation());
  readonly assignedMonsters = computed(() => this.computeAssignedMonsters());
  readonly missingByEncounter = computed(() => this.computeMissing());
  readonly missingNPCs = computed(() => this.computeMissingNpcs());
  readonly locations = computed(() => Array.from(this.minisByLocation().keys()).sort());

  availableRegExp = model<string>('');
  available = computed(() => new RegExp(this.availableRegExp(), 'i'));

  computeMinis(): Multimap<string, LocationData> {
    const minis = new Multimap<string, LocationData>();

    for (const encounter of this.adventure()?.encounters() ?? []) {
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

  private computeMinisByLocation(): Multimap<string, Mini> {
    const minisByName = new Map<string, Mini>();

    for (const encounter of this.adventure()?.encounters() ?? []) {
      for (const selections of encounter.miniatures().values()) {
        for (const selection of selections) {
          const mini = minisByName.get(selection.miniature) || new Mini(selection.miniature, selection.location);
          mini.add(selection, encounter.isFinished(), this.isAvailable(encounter.id()), encounter);
          minisByName.set(mini.name, mini);
        }
      }
    }

    // NPCs
    for (const npc of this.adventure()?.campaign?.npcs() ?? []) {
      for (const selection of npc.miniature()) {
        const mini = minisByName.get(selection.miniature) || new Mini(selection.miniature, selection.location);
        mini.add(selection, npc.state() === NPCState.dead, this.isAvailable(npc.name));
        minisByName.set(mini.name, mini);
      }
    }

    const minisByLocation = new Multimap<string, Mini>();
    for (const mini of minisByName.values()) {
      minisByLocation.set(mini.location, mini);
    }

    return minisByLocation;
  }

  private isAvailable(name: string): boolean {
    return !!name && !!this.availableRegExp() && this.available().test(name);
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
    if (this.adventure()) {
      for (const encounter of this.adventure()!.encounters()) {
        for (const selections of encounter.miniatures().values()) {
          for (const selection of selections) {
            monsters.add(selection.monster);
          }
        }
      }
    }

    return monsters;
  }

  computeMissing(): Map<Encounter, Monster[]> {
    const missing = new Map<Encounter, Monster[]>();

    if (this.adventure()) {
      for (const encounter of this.adventure()!.encounters()) {
        if (!encounter.isFinished() && !this.isAvailable(encounter.id())) {
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
    }

    return missing;
  }

  computeMissingNpcs(): NPC[] {
    return (
      this.adventure()
        ?.campaign.npcs()
        .filter((n) => n.miniature().length == 0) ?? []
    );
  }
}
