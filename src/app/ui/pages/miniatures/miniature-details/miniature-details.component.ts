import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Miniature } from 'src/app/data/entities/miniature';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LocationComponent } from '../../../common/location/location.component';
import { NgIf, LowerCasePipe } from '@angular/common';
import { ChipComponent } from '../../../common/chip/chip.component';
import { DialogComponent } from '../../../common/dialog/dialog.component';

export interface DialogData {
  miniature: Miniature;
  selector?: (miniature: Miniature) => void;
}

@Component({
    selector: 'miniature-details',
    templateUrl: './miniature-details.component.html',
    styleUrls: ['./miniature-details.component.scss'],
    standalone: true,
    imports: [
        DialogComponent,
        ChipComponent,
        NgIf,
        LocationComponent,
        MatButtonModule,
        MatIconModule,
        LowerCasePipe,
    ],
})
export class MiniatureDetailsComponent {
  miniature: Miniature;
  selector?: (miniature: Miniature) => void;

  constructor(
    private readonly ref: MatDialogRef<MiniatureDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData
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
