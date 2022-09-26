import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Encounter } from '../../../../data/encounter';
import { FilterData } from '../../../../data/FilterData';
import { Miniature } from '../../../../data/miniature';
import { Monster } from '../../../../data/monster';
import { MiniaturesGridComponent } from '../../miniatures/miniatures-grid/miniatures-grid.component';
import { EditData } from '../adventure/adventure.component';

const PATTERN_LINE = /\s*(.*?)\s*:\s*(\d+)?/;

@Component({
  selector: 'miniature-selection-dialog',
  templateUrl: './miniature-selection-dialog.component.html',
  styleUrls: ['./miniature-selection-dialog.component.scss'],
})
export class MiniatureSelectionDialogComponent {
  @ViewChild(MiniaturesGridComponent) grid!: MiniaturesGridComponent;

  readonly encounter?: Encounter;
  currentMonster?: [number, Monster];
  currentFilter?: FilterData;
  miniatures = '';
  selector = this.miniSelected.bind(this);
  readonly assigned = new Map<string, number>();

  constructor(
    private readonly ref: MatDialogRef<MiniatureSelectionDialogComponent, Encounter>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData
  ) {
    this.encounter = data.encounter;
    if (this.encounter && this.encounter.monsters.length > 0) {
      this.currentMonster = this.encounter.monsters[0];
      this.onMonsterChange();
    }

    this.miniatures = this.encounter?.miniaturesData || '';
    this.parseMiniatures();
  }

  onMonsterChange() {
    if (this.currentMonster) {
      this.currentFilter = {
        name: '',
        rarities: [],
        sizes: [this.currentMonster[1].size],
        types: [this.currentMonster[1].type.name],
        subtypes: [],
        races: [this.currentMonster[1].name],
        classes: [],
        locations: [],
        sets: [],
      };
    }
  }

  onMiniaturesChange() {
    this.parseMiniatures();
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(this.encounter?.withMiniatures(this.miniatures));
  }

  onFilter(filter: FilterData) {
    this.grid.doFilter(filter);
  }

  miniSelected(miniature: Miniature) {
    console.log('~~miniselected');
    console.trace();
    if (this.currentMonster) {
      if (this.miniatures) {
        this.miniatures += '\n';
      }

      let missing = this.currentMonster[0] - (this.assigned.get(this.currentMonster[1].name) || 0);
      if (missing <= 0) {
        missing = 1;
      }
      this.miniatures += `${this.currentMonster[1].name}: ${Math.min(missing, miniature.owned)}x ${miniature.name} (${
        miniature.location
      });`;
      this.parseMiniatures();
    }
  }

  private parseMiniatures() {
    const parts = this.miniatures.split(/;\s*/);
    this.assigned.clear();

    for (const part of parts) {
      if (part) {
        const match = part.match(PATTERN_LINE);
        if (match) {
          this.assigned.set(match[1], (Number(match[2]) || 1) + (this.assigned.get(match[1]) || 0));
        }
      }
    }
  }
}
