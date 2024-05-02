import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LocationFilter } from 'src/app/data/facts/factoids/location';
import { DialogComponent } from '../../common/dialog/dialog.component';
import { FilterComponent } from './filter.component';

export interface DialogData {
  update?: (filter: LocationFilter) => void;
  filter: LocationFilter;
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
  readonly filter: LocationFilter;

  constructor(
    private readonly ref: MatDialogRef<FilterDialogComponent, LocationFilter>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData,
  ) {
    this.filter = data.filter;
  }

  onClear() {
    this.filterComponent.clear();
  }

  onFilter() {
    this.ref.close(this.filter);
  }

  onFilterChange(filter: LocationFilter) {
    if (this.data.update) {
      this.data.update(filter);
    }
  }
}
