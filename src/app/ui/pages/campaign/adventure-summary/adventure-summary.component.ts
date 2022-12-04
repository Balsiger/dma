import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Adventure } from '../../../../data/adventure';
import { Encounter, MiniatureSelection } from '../../../../data/encounter';

@Component({
  selector: 'adventure-summary',
  templateUrl: './adventure-summary.component.html',
  styleUrls: ['./adventure-summary.component.scss'],
})
export class AdventureSummaryComponent implements OnChanges {
  @Input() adventure?: Adventure;

  readonly miniaturesByLocation = new Map<string, [Encounter, MiniatureSelection][]>();
  locations: string[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['adventure']) {
      if (this.adventure) {
        for (const encounter of this.adventure.encounters) {
          for (const selections of encounter.miniatures.values()) {
            for (const selection of selections) {
              let miniatures = this.miniaturesByLocation.get(selection.location);
              if (!miniatures) {
                miniatures = [];
                this.miniaturesByLocation.set(selection.location, miniatures);
              }

              miniatures.push([encounter, selection]);
            }
          }
        }

        this.locations = Array.from(this.miniaturesByLocation.keys()).sort();
      }
    }
  }
}
