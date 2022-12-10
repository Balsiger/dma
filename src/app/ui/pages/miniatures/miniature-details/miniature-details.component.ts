import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Miniature } from 'src/app/data/miniature';

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
