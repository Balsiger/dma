import { LowerCasePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Miniature } from 'src/app/data/entities/miniature';
import { ChipComponent } from '../common/chip/chip.component';
import { DialogComponent } from '../common/dialog/dialog.component';
import { LocationComponent } from './location/location.component';

export interface DialogData {
  miniature: Miniature;
  selector?: (miniature: Miniature) => void;
}

@Component({
  selector: 'miniature-details',
  templateUrl: './miniature-details.component.html',
  styleUrls: ['./miniature-details.component.scss'],
  standalone: true,
  imports: [DialogComponent, ChipComponent, LocationComponent, MatButtonModule, MatIconModule, LowerCasePipe],
})
export class MiniatureDetailsComponent {
  miniature: Miniature;
  selector?: (miniature: Miniature) => void;

  constructor(
    private readonly ref: MatDialogRef<MiniatureDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData,
  ) {
    this.miniature = data.miniature;
    this.selector = data.selector;
  }

  onSelect() {
    if (this.selector) {
      this.selector(this.miniature);
      this.ref.close();
    }
  }
}
