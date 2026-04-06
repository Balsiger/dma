import { Component, Inject, OnInit, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Miniature } from '../../data/entities/miniature';
import { Monster } from '../../data/entities/monster';
import { Parametrized } from '../../data/entities/parametrized';
import { LocationFilter } from '../../data/facts/factoids/location';
import { EntitiesService } from '../../services/entity/entities.service';
import { MiniaturesService } from '../../services/entity/miniatures.service';
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
  readonly assigned = computed(() => this.computeAssigned(this.miniatureSelectionsByName));

  constructor(
    private readonly ref: MatDialogRef<MiniatureSelectionDialogComponent, Map<string, MiniatureSelection[]>>,
    @Inject(MAT_DIALOG_DATA) readonly data: Data,
    private readonly miniatureService: MiniaturesService,
    private readonly entitiesService: EntitiesService,
  ) {
    this.miniatureSelectionsByName = data.miniatures;
    this.monsters = data.monsters;

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

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(this.miniatureSelectionsByName);
  }

  miniSelected(miniature: Miniature) {
    if (this.currentMonster) {
      let missing = this.currentMonster.count - (this.assigned().get(this.currentMonster.entity.name) || 0);
      if (missing <= 0) {
        missing = 1;
      }

      // TODO: There are multiple selections which need to be handled
      const miniSelections = new Map([...this.miniatureSelectionsByName]);

      const selections = miniSelections.get(this.currentMonster.entity.name) ?? [];
      selections.push(
        new MiniatureSelection(
          this.currentMonster.entity.name,
          Math.min(missing, miniature.owned),
          miniature.name,
          miniature.location,
        ),
      );
      miniSelections.set(this.currentMonster.entity.name, selections);

      this.miniatureSelectionsByName = miniSelections;
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
