import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Miniature } from 'src/app/data/entities/miniature';

export interface DialogData {
  miniature: Miniature;
  selector?: (miniature: Miniature) => void;
}

@Component({
  selector: 'miniature-details',
  templateUrl: './miniature-details.component.html',
  styleUrls: ['./miniature-details.component.scss'],
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
