import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogState, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { EMPTY, FilterData } from '../../../../data/filter_data';
import { COLORS, Location } from '../../../../data/location';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

interface DialogData {
  location: Location;
}

@Component({
  selector: 'location-edit-dialog',
  templateUrl: './location-edit-dialog.component.html',
  styleUrls: ['./location-edit-dialog.component.scss'],
})
export class LocationEditDialogComponent {
  colors = Array.from(COLORS.values());

  filterDialog?: MatDialogRef<FilterDialogComponent, FilterData>;

  constructor(
    private readonly ref: MatDialogRef<LocationEditDialogComponent, Location>,
    @Inject(MAT_DIALOG_DATA) public location: Location,
    private readonly dialog: MatDialog
  ) {}

  onName(name: string) {
    this.location = this.location.withName(name);
  }

  onColor(color: string) {
    this.location = this.location.withStyle(color);
  }

  onAddFilter(index: number) {
    this.location = this.location.withFilters([
      ...this.location.filters.slice(0, index + 1),
      EMPTY,
      ...this.location.filters.slice(index + 1),
    ]);
  }

  onDeleteFilter(index: number) {
    this.location = this.location.withFilters([
      ...this.location.filters.slice(0, index),
      ...this.location.filters.slice(index + 1),
    ]);
  }

  async onEditFilter(index: number) {
    if (this.filterDialog?.getState() === MatDialogState.OPEN) {
      this.filterDialog.close();
      this.filterDialog = undefined;
    } else {
      this.filterDialog = this.dialog.open(FilterDialogComponent, {
        data: {
          filter: this.location.filters[index],
        },
      });

      const filter = await firstValueFrom(this.filterDialog.afterClosed());
      if (filter) {
        this.location = this.location.withFilters([
          ...this.location.filters.slice(0, index),
          filter,
          ...this.location.filters.slice(index + 1),
        ]);
      }
    }
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(this.location);
  }
}
