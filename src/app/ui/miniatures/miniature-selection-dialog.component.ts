import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LocationFilter } from '../../data/entities/fluid/factoids/location';
import { Miniature } from '../../data/entities/immutable/miniature';
import { Monster } from '../../data/entities/immutable/monster';
import { Parametrized } from '../../data/entities/immutable/parametrized';
import { MiniatureSelection } from '../../data/values/miniature-selection';
import { ImmutablesService } from '../../services/immutable/entities.service';
import { MiniaturesService } from '../../services/immutable/miniatures.service';
import { Filter } from '../common/filtering-line/filtering-line.component';
import { FilteringComponent } from '../common/filtering/filtering.component';
import { EntitiesGridComponent } from '../entities/entities-grid.component';

interface Data {
  miniatures: Map<string, MiniatureSelection[]>;
  monsters: Parametrized<Monster>[];
}

@Component({
  selector: 'miniature-selection-dialog',
  templateUrl: './miniature-selection-dialog.component.html',
  styleUrls: ['./miniature-selection-dialog.component.scss'],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    EntitiesGridComponent,
    FilteringComponent,
    MatIconModule,
  ],
})
export class MiniatureSelectionDialogComponent implements OnInit {
  miniatureSelectionsByName: Map<string, MiniatureSelection[]>;
  monsters: Parametrized<Monster>[];
  currentMonster?: Parametrized<Monster>;
  currentFilter?: LocationFilter;
  currentFilters = new Map<string, any>();

  miniatures: Miniature[] = [];
  selector = this.miniSelected.bind(this);
  filters: Filter[] = [];
  assigned: Map<string, number>;

  constructor(
    private readonly ref: MatDialogRef<MiniatureSelectionDialogComponent, Map<string, MiniatureSelection[]>>,
    @Inject(MAT_DIALOG_DATA) readonly data: Data,
    private readonly miniatureService: MiniaturesService,
    private readonly entitiesService: ImmutablesService,
  ) {
    this.miniatureSelectionsByName = data.miniatures;
    this.monsters = data.monsters;
    this.assigned = this.computeAssigned(this.miniatureSelectionsByName);

    this.load();
  }

  ngOnInit(): void {
    this.currentMonster = this.monsters[0];
    this.onMonsterChange();
  }

  private async load() {
    this.miniatures = this.entitiesService.miniatures.getAll();
    this.filters = await this.miniatureService.getFilters();
  }

  async onMonsterChange() {
    if (this.currentMonster && this.currentMonster.entity) {
      const filters = new Map<string, any>();

      if (this.currentMonster.entity.size.bases.length) {
        filters.set('Size', this.currentMonster.entity.size.bases);
      } else {
        filters.set('Size', this.currentMonster.entity.size);
      }
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

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(this.miniatureSelectionsByName);
  }

  miniSelected(miniature: Miniature) {
    if (this.currentMonster) {
      let missing = this.currentMonster.count - (this.assigned.get(this.currentMonster.name) || 0);
      if (missing <= 0) {
        missing = 1;
      }

      const selections = this.miniatureSelectionsByName.get(this.currentMonster.name) ?? [];
      selections.push(
        new MiniatureSelection(
          this.currentMonster.name,
          Math.min(missing, miniature.owned),
          miniature.name,
          miniature.location,
        ),
      );
      this.miniatureSelectionsByName.set(this.currentMonster.name, selections);
      this.assigned = this.computeAssigned(this.miniatureSelectionsByName);
    }
  }

  onMinisCleared() {
    this.miniatureSelectionsByName.clear();
  }

  private computeAssigned(selected?: Map<string, MiniatureSelection[]>): Map<string, number> {
    const assigned = new Map<string, number>();
    for (const [name, assignments] of selected?.entries() || []) {
      let count = 0;
      for (const assignment of assignments) {
        count += assignment.count;
      }

      if (count > 0) {
        assigned.set(name, count);
      }
    }

    return assigned;
  }
}
