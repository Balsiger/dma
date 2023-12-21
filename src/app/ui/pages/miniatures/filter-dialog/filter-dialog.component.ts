import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilterData } from 'src/app/data/filter_data';
import { FilterComponent } from '../filter/filter.component';
import { DialogComponent } from '../../../common/dialog/dialog.component';

export interface DialogData {
  update?: (filter: FilterData) => void;
  filter: FilterData;
}

@Component({
    selector: 'filter-dialog',
    templateUrl: './filter-dialog.component.html',
    styleUrls: ['./filter-dialog.component.scss'],
    standalone: true,
    imports: [DialogComponent, FilterComponent],
})
export class FilterDialogComponent {
  @ViewChild(FilterComponent) filterComponent!: FilterComponent;
  readonly filter: FilterData;

  constructor(
    private readonly ref: MatDialogRef<FilterDialogComponent, FilterData>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData
  ) {
    this.filter = data.filter;
  }

  onClear() {
    this.filterComponent.clear();
  }

  onFilter() {
    this.ref.close(this.filter);
  }

  onFilterChange(filter: FilterData) {
    if (this.data.update) {
      this.data.update(filter);
    }
  }
}
