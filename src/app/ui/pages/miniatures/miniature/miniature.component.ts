import { Component, Input } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Miniature } from '../../../../data/miniature';
import { MiniatureDetailsComponent } from '../miniature-details/miniature-details.component';

@Component({
  selector: 'miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.scss'],
})
export class MiniatureComponent {
  @Input() miniature?: Miniature;
  @Input() selector?: (miniature: Miniature) => void;

  constructor(private readonly dialog: MatDialog) {}

  onClick() {
    this.dialog.open(MiniatureDetailsComponent, {
      data: {
        miniature: this.miniature,
        selector: this.selector,
      },
    });
  }
}
