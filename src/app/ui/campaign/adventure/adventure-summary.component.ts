import { Component, computed, input } from '@angular/core';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Monster } from '../../../data/entities/monster';
import { Adventure } from '../../../data/facts/adventure';
import { Encounter } from '../../../data/facts/encounter';

export interface LocationData {
  encounter: Encounter;
  selection: MiniatureSelection;
}

@Component({
    selector: 'adventure-summary',
    templateUrl: './adventure-summary.component.html',
    styleUrls: ['./adventure-summary.component.scss'],
    imports: []
})
export class AdventureSummaryComponent {
  readonly adventure = input<Adventure>();
  readonly linkToPrintable = input(true);

  readonly miniaturesByLocation = computed(() => this.computeMinis());
  readonly assignedMonsters = computed(() => this.computeAssignedMonsters());
  readonly missingByEncounter = computed(() => this.computeMissing());
  readonly locations = computed(() => Array.from(this.miniaturesByLocation().keys()).sort());

  computeMinis(): Map<string, LocationData[]> {
    const minis = new Map<string, LocationData[]>();

    if (this.adventure()) {
      for (const encounter of this.adventure()!.encounters()) {
        const monstersAssigned = new Set<string>();
        for (const selections of encounter.miniatures().values()) {
          for (const selection of selections) {
            monstersAssigned.add(selection.monster);
            let miniatures = minis.get(selection.location);
            if (!miniatures) {
              miniatures = [];
              minis.set(selection.location, miniatures);
            }

            miniatures.push({ encounter, selection });
          }
        }
      }
    }

    return minis;
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
        for (const monster of encounter.monsters()) {
          if (!this.assignedMonsters().has(monster.name())) {
            let monsters = missing.get(encounter);
            if (!monsters) {
              monsters = [];
              missing.set(encounter, monsters);
            }

            if (monster.entity()) {
              monsters.push(monster.entity()!);
            }
          }
        }
      }
    }

    return missing;
  }
}
