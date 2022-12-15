import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Miniature } from '../../../../data/entities/miniature';
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
