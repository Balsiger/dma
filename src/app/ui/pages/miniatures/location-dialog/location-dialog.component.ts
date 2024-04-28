import { CdkDrag, CdkDragDrop, CdkDragPreview, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgFor, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { Location } from '../../../../data/facts/factoids/location';
import { UserMiniatureService } from '../../../../services/fact/user-miniature.service';
import { LocationComponent } from '../../../common/location/location.component';
import { LocationEditDialogComponent } from '../location-edit-dialog/location-edit-dialog.component';

@Component({
  selector: 'location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.scss'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag, LocationComponent, NgIf, MatButtonModule, MatIconModule, CdkDragPreview],
})
export class LocationDialogComponent {
  editDialog?: MatDialogRef<LocationEditDialogComponent, Location>;

  constructor(
    private readonly ref: MatDialogRef<LocationDialogComponent, Location[] | undefined>,
    @Inject(MAT_DIALOG_DATA) readonly locations: Location[],
    private readonly dialog: MatDialog,
  ) {}

  onDropLocation(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.locations, event.previousIndex, event.currentIndex);
  }

  onCancel() {
    this.ref.close();
  }

  onDelete(location: Location) {
    const index = this.locations.indexOf(location);
    if (index >= 0) {
      this.locations.splice(index, 1);
    }
  }

  onAdd(location: Location) {
    const index = this.locations.indexOf(location);
    if (index >= 0) {
      this.locations.splice(index, 0, new Location(null as any as UserMiniatureService, '??', {}));
    }
  }

  async onEdit(location: Location) {
    const index = this.locations.indexOf(location);
    if (this.editDialog?.getState() === MatDialogState.OPEN) {
      this.editDialog.close();
      this.editDialog = undefined;
    } else {
      this.editDialog = this.dialog.open(LocationEditDialogComponent, {
        hasBackdrop: true,
        disableClose: true,
        data: location,
      });

      const edited = await firstValueFrom(this.editDialog.afterClosed());
      if (edited) {
        this.locations.splice(index, 1, edited);
      }
    }
  }

  onSave() {
    this.ref.close(this.locations);
  }
}
