import { Component, Inject, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Miniature } from '../../data/entities/miniature';
import { Monster } from '../../data/entities/monster';
import { Parametrized } from '../../data/entities/parametrized';
import { EditData, Encounter } from '../../data/facts/encounter';
import { LocationFilter } from '../../data/facts/factoids/location';
import { EntitiesService } from '../../services/entity/entities.service';
import { MiniaturesService } from '../../services/entity/miniatures.service';
import { Filter } from '../common/filtering-line/filtering-line.component';
import { FilteringComponent } from '../common/filtering/filtering.component';
import { EntitiesGridComponent } from '../entities/entities-grid.component';

@Component({
  selector: 'miniature-selection-dialog',
  templateUrl: './miniature-selection-dialog.component.html',
  styleUrls: ['./miniature-selection-dialog.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    EntitiesGridComponent,
    FilteringComponent,
  ],
})
export class MiniatureSelectionDialogComponent {
  readonly encounter?: Encounter;
  currentMonster?: Parametrized<Monster>;
  currentFilter?: LocationFilter;
  currentFilters = new Map<string, any>();
  miniatures = '';
  // TODO: Rename to miniatures, and rename current miniatures to something else.
  minis: Miniature[] = [];
  selector = this.miniSelected.bind(this);
  filters: Filter[] = [];
  readonly assignedOld = new Map<string, number>();
  readonly assigned = computed(() => this.computeAssigned(this.encounter?.miniatures()));

  constructor(
    private readonly ref: MatDialogRef<MiniatureSelectionDialogComponent, Encounter>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
    private readonly miniatureService: MiniaturesService,
    private readonly entitiesService: EntitiesService,
  ) {
    this.encounter = data.encounter;
    const monsters = this.encounter?.entity()?.monsters;
    if (monsters && (monsters?.length ?? 0 > 0)) {
      this.currentMonster = monsters[0];
      this.onMonsterChange();
    }

    this.miniatures = this.encounter?.toData()?.miniatures || '';
    this.load();
  }

  private async load() {
    this.minis = this.entitiesService.miniatures.getAll();
    this.filters = await this.miniatureService.getFilters();
  }

  async onMonsterChange() {
    if (this.currentMonster && this.currentMonster.entity && this.encounter) {
      const filters = new Map<string, any>();
      filters.set('Size', this.currentMonster.entity.size);
      if (await this.miniatureService.hasType(this.currentMonster.entity.type.name)) {
        filters.set('Type', this.currentMonster.entity.type.name);
      }

      const races = await this.miniatureService.availbleRaces(
        Monster.collectRaces(
          this.entitiesService.monsters,
          this.currentMonster.name,
          this.currentMonster.entity.common.bases,
        ),
      );
      if (races.length) {
        filters.set('Race', races);
      }

      this.currentFilters = filters; // Create a new map to trigger @Input changes.
    }
  }

  onMiniaturesChange() {
    this.parseMiniatures();
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.encounter?.setMiniatures(this.miniatures);
    this.ref.close(this.encounter);
  }

  miniSelected(miniature: Miniature) {
    if (this.currentMonster) {
      if (this.miniatures) {
        this.miniatures += '\n';
      }

      let missing = this.currentMonster.count - (this.assigned().get(this.currentMonster.name) || 0);
      if (missing <= 0) {
        missing = 1;
      }
      this.miniatures += `${this.currentMonster.name}: ${Math.min(missing, miniature.owned)}x ${miniature.name} (${
        miniature.location
      });`;
      this.parseMiniatures();
    }
  }

  private parseMiniatures() {
    const parsed = MiniatureSelection.parseMiniatures(this.miniatures);
    this.assignedOld.clear();
    for (const assignments of parsed.values()) {
      let count = 0;
      for (const assignment of assignments) {
        count += assignment.count;
      }

      this.assignedOld.set(assignments[0].monster, count);
    }
  }

  private computeAssigned(selected?: Map<string, MiniatureSelection[]>): Map<string, number> {
    const assigned = new Map<string, number>();
    for (const assignments of selected?.values() || []) {
      let count = 0;
      for (const assignment of assignments) {
        count += assignment.count;
      }

      assigned.set(assignments[0].monster, count);
    }

    return assigned;
  }
}
