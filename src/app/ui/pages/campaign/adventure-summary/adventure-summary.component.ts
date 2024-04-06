import { NgFor } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../../../data/entities/monster';
import { Adventure } from '../../../../data/facts/adventure';
import { Encounter, MiniatureSelection } from '../../../../data/facts/encounter';

@Component({
  selector: 'adventure-summary',
  templateUrl: './adventure-summary.component.html',
  styleUrls: ['./adventure-summary.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class AdventureSummaryComponent implements OnChanges {
  @Input() adventure?: Adventure;
  @Input() linkToPrintable = true;

  readonly miniaturesByLocation = new Map<string, [Encounter, MiniatureSelection][]>();
  readonly missingByEncounter = new Map<Encounter, Monster[]>();
  locations: string[] = [];
  missing: string[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['adventure']) {
      if (this.adventure) {
        for (const encounter of this.adventure.encounters) {
          const monstersAssigned = new Set<string>();
          for (const selections of encounter.miniatures.values()) {
            for (const selection of selections) {
              monstersAssigned.add(selection.monster);
              let miniatures = this.miniaturesByLocation.get(selection.location);
              if (!miniatures) {
                miniatures = [];
                this.miniaturesByLocation.set(selection.location, miniatures);
              }

              miniatures.push([encounter, selection]);
            }
          }

          if (!encounter.isFinished()) {
            for (const monster of encounter.monsters) {
              if (!monstersAssigned.has(monster.value.value.name)) {
                let monsters = this.missingByEncounter.get(encounter);
                if (!monsters) {
                  monsters = [];
                  this.missingByEncounter.set(encounter, monsters);
                }

                monsters.push(monster.value.value);
              }
            }
          }
        }

        this.locations = Array.from(this.miniaturesByLocation.keys()).sort();
      }
    }
  }
}
