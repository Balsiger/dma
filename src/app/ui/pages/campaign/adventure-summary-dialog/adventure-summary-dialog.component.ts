import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Adventure } from '../../../../data/adventure';
import { Encounter, MiniatureSelection } from '../../../../data/encounter';
import { MiniaturesService } from '../../../../services/miniatures.service';
import { EditData } from '../adventure/adventure.component';
import { MiniatureSelectionDialogComponent } from '../miniature-selection-dialog/miniature-selection-dialog.component';

@Component({
  selector: 'app-adventure-summary-dialog',
  templateUrl: './adventure-summary-dialog.component.html',
  styleUrls: ['./adventure-summary-dialog.component.scss'],
})
export class AdventureSummaryDialogComponent {
  readonly adventure: Adventure;
  readonly miniaturesByLocation = new Map<string, [Encounter, MiniatureSelection][]>();
  readonly locations: string[];

  constructor(
    private readonly ref: MatDialogRef<MiniatureSelectionDialogComponent, Encounter>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
    private readonly miniatureService: MiniaturesService
  ) {
    this.adventure = data.adventure;

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
