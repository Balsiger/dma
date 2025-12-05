import { Component, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Monster } from '../../../data/entities/monster';
import { Adventure } from '../../../data/facts/adventure';
import { Encounter } from '../../../data/facts/encounter';

export interface LocationData {
  encounter: Encounter;
  selection: MiniatureSelection;
}

export interface Mini {
  location: LocationData[];
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
  readonly locations = computed(() => Array.from(this.miniaturesByLocation().keys()).sort());

  availableRegExp = model<string>('');
  available = computed(() => new RegExp(this.availableRegExp(), 'i'));

  computeMinis(): Map<string, Mini> {
    const minis = new Map<string, Mini>();

    if (this.adventure()) {
      for (const encounter of this.adventure()!.encounters()) {
        const monstersAssigned = new Set<string>();
        for (const selections of encounter.miniatures().values()) {
          for (const selection of selections) {
            monstersAssigned.add(selection.monster);
            let miniatures = minis.get(selection.location);
            if (!miniatures) {
              miniatures = {
                location: [],
                done: encounter.isFinished(),
                available: this.available().test(encounter.entity()?.shortName || ''),
              };
              minis.set(selection.location, miniatures);
            }

            miniatures.location.push({ encounter, selection });
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
        for (const monster of encounter.entity()?.monsters ?? []) {
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
}
