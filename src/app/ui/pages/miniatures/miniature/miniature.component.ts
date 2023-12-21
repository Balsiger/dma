import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Miniature } from '../../../../data/entities/miniature';
import { MiniatureDetailsComponent } from '../miniature-details/miniature-details.component';
import { LowerCasePipe } from '@angular/common';
import { ChipComponent } from '../../../common/chip/chip.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'miniature',
    templateUrl: './miniature.component.html',
    styleUrls: ['./miniature.component.scss'],
    standalone: true,
    imports: [
        MatTooltipModule,
        ChipComponent,
        LowerCasePipe,
    ],
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
