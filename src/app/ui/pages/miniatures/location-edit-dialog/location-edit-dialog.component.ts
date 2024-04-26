import { NgFor, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { COLORS, EMPTY, Location, LocationFilter } from '../../../../data/facts/location';
import { LocationComponent } from '../../../common/location/location.component';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

interface DialogData {
  location: Location;
}

@Component({
  selector: 'location-edit-dialog',
  templateUrl: './location-edit-dialog.component.html',
  styleUrls: ['./location-edit-dialog.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, NgFor, LocationComponent, NgIf, MatButtonModule, MatIconModule],
})
export class LocationEditDialogComponent {
  colors = Array.from(COLORS.values());

  filterDialog?: MatDialogRef<FilterDialogComponent, LocationFilter>;

  constructor(
    private readonly ref: MatDialogRef<LocationEditDialogComponent, Location>,
    @Inject(MAT_DIALOG_DATA) public location: Location,
    private readonly dialog: MatDialog,
  ) {}

  onName(name: string) {
    this.location = this.location.withName(name);
  }

  onColor(color: string) {
    this.location = this.location.withStyle(color);
  }

  onAddFilter(index: number) {
    this.location = this.location.withFilters([
      ...this.location.filters().slice(0, index + 1),
      EMPTY,
      ...this.location.filters().slice(index + 1),
    ]);
  }

  onDeleteFilter(index: number) {
    this.location = this.location.withFilters([
      ...this.location.filters().slice(0, index),
      ...this.location.filters().slice(index + 1),
    ]);
  }

  async onEditFilter(index: number) {
    if (this.filterDialog?.getState() === MatDialogState.OPEN) {
      this.filterDialog.close();
      this.filterDialog = undefined;
    } else {
      this.filterDialog = this.dialog.open(FilterDialogComponent, {
        data: {
          filter: this.location.filters()[index],
        },
      });

      const filter = await firstValueFrom(this.filterDialog.afterClosed());
      if (filter) {
        this.location = this.location.withFilters([
          ...this.location.filters().slice(0, index),
          filter,
          ...this.location.filters().slice(index + 1),
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
