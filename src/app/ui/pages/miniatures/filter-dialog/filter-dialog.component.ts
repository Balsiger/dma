import { Component, Inject, ViewChild } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { FilterData } from 'src/app/data/FilterData';
import { FilterComponent } from '../filter/filter.component';

export interface DialogData {
  update?: (filter: FilterData) => void;
  filter: FilterData;
}

@Component({
  selector: 'filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
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
