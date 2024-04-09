import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Miniature } from '../../../../data/entities/miniature';
import { Monster } from '../../../../data/entities/monster';
import { Encounter } from '../../../../data/facts/encounter';
import { LocationFilter } from '../../../../data/facts/location';
import { CollapsibleValue, CountedValue } from '../../../../data/wrappers';
import { MiniaturesService } from '../../../../services/entity/miniatures.service';
import { MonsterService } from '../../../../services/entity/monster.service';
import { EntitiesGridComponent } from '../../../common/entities-grid/entities-grid.component';
import { Filter } from '../../../common/filtering-line/filtering-line.component';
import { FilteringComponent } from '../../../common/filtering/filtering.component';
import { FilterComponent } from '../../miniatures/filter/filter.component';
import { EditData } from '../adventure/adventure.component';

const PATTERN_LINE = /\s*(.*?)\s*:\s*(\d+)?/;

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
    FilterComponent,
    MatInputModule,
    MatButtonModule,
    EntitiesGridComponent,
    FilteringComponent,
  ],
})
export class MiniatureSelectionDialogComponent {
  readonly encounter?: Encounter;
  currentMonster?: CountedValue<CollapsibleValue<Monster>>;
  currentFilter?: LocationFilter;
  currentFilters = new Map<string, any>();
  miniatures = '';
  // TODO: Rename to miniatures, and rename current miniatures to something else.
  minis: Miniature[] = [];
  selector = this.miniSelected.bind(this);
  filters: Filter[] = [];
  readonly assigned = new Map<string, number>();

  constructor(
    private readonly ref: MatDialogRef<MiniatureSelectionDialogComponent, Encounter>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
    private readonly miniatureService: MiniaturesService,
    private readonly monsterService: MonsterService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
    this.encounter = data.encounter;
    if (this.encounter && this.encounter.monsters.length > 0) {
      this.currentMonster = this.encounter.monsters[0];
      this.onMonsterChange();
    }

    this.miniatures = this.encounter?.miniaturesData || '';
    this.parseMiniatures();

    this.load();
  }

  private async load() {
    this.minis = await this.miniatureService.getAll();
    this.filters = await this.miniatureService.getFilters();
  }

  async onMonsterChange() {
    if (this.currentMonster) {
      const filters = new Map<string, any>();
      filters.set('Size', this.currentMonster.value.value.size);
      if (await this.miniatureService.hasType(this.currentMonster.value.value.type.name)) {
        filters.set('Type', this.currentMonster.value.value.type.name);
      }
      filters.set(
        'Race',
        await this.miniatureService.availbleRaces(
          await Monster.collectRaces(
            this.monsterService,
            this.currentMonster.value.value.name,
            this.currentMonster.value.value.common.bases,
          ),
        ),
      );

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
    this.ref.close(this.encounter?.withMiniatures(this.miniatures));
  }

  miniSelected(miniature: Miniature) {
    if (this.currentMonster) {
      if (this.miniatures) {
        this.miniatures += '\n';
      }

      let missing = this.currentMonster.count - (this.assigned.get(this.currentMonster.value.value.name) || 0);
      if (missing <= 0) {
        missing = 1;
      }
      this.miniatures += `${this.currentMonster.value.value.name}: ${Math.min(missing, miniature.owned)}x ${
        miniature.name
      } (${miniature.location});`;
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
