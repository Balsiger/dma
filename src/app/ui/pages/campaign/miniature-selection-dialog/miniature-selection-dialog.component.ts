import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Miniature } from '../../../../data/entities/miniature';
import { Monster } from '../../../../data/entities/monster';
import { FilterData } from '../../../../data/filter_data';
import { Encounter } from '../../../../data/things/encounter';
import { MiniaturesService } from '../../../../services/miniatures.service';
import { MonsterService } from '../../../../services/monster.service';
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
  currentMonster?: [number, Monster, boolean];
  currentFilter?: FilterData;
  miniatures = '';
  selector = this.miniSelected.bind(this);
  readonly assigned = new Map<string, number>();

  constructor(
    private readonly ref: MatDialogRef<MiniatureSelectionDialogComponent, Encounter>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
    private readonly miniatureService: MiniaturesService,
    private readonly monsterService: MonsterService
  ) {
    this.encounter = data.encounter;
    if (this.encounter && this.encounter.monsters.length > 0) {
      this.currentMonster = this.encounter.monsters[0];
      this.onMonsterChange();
    }

    this.miniatures = this.encounter?.miniaturesData || '';
    this.parseMiniatures();
  }

  async onMonsterChange() {
    setTimeout(async () => {
      // Do this in a timeout to ensure that the response properly updates the UI because of the async calls to miniature service.
      if (this.currentMonster) {
        this.currentFilter = {
          name: '',
          rarities: [],
          sizes: [this.currentMonster[1].size],
          types: (await this.miniatureService.hasType(this.currentMonster[1].type.name))
            ? [this.currentMonster[1].type.name]
            : [],
          subtypes: [],
          races: await this.miniatureService.availbleRaces(
            await Monster.collectRaces(
              this.monsterService,
              this.currentMonster[1].name,
              this.currentMonster[1].common.bases
            )
          ),
          classes: [],
          locations: [],
          sets: [],
        };
      }
    });
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
    const parsed = Encounter.parseMiniatures(this.miniatures);
    this.assigned.clear();
    for (const assignments of parsed.values()) {
      let count = 0;
      for (const assignment of assignments) {
        count += assignment.count;
      }

      this.assigned.set(assignments[0].monster, count);
    }
  }
}
