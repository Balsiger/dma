import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogState, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { Location } from '../../../../data/location';
import { LocationEditDialogComponent } from '../location-edit-dialog/location-edit-dialog.component';

@Component({
  selector: 'location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.scss']
})
export class LocationDialogComponent {

  editDialog?: MatDialogRef<LocationEditDialogComponent, Location>;

  constructor(private readonly ref: MatDialogRef<LocationDialogComponent, Location[]|undefined>,
    @Inject(MAT_DIALOG_DATA) readonly locations: Location[], private readonly dialog: MatDialog) { 
  } 

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
      this.locations.splice(index, 0, new Location('??', 0, []));
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
