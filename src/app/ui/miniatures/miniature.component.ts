import { LowerCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Miniature } from '../../data/entities/miniature';
import { ChipComponent } from '../common/chip/chip.component';
import { MiniatureDetailsComponent } from './miniature-details.component';

@Component({
  selector: 'miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.scss'],
  standalone: true,
  imports: [MatTooltipModule, ChipComponent, LowerCasePipe],
})
export class MiniatureComponent {
  miniature = input<Miniature>();
  selector = input<(miniature: Miniature) => void>();

  constructor(private readonly dialog: MatDialog) {}

  onClick() {
    this.dialog.open(MiniatureDetailsComponent, {
      data: {
        miniature: this.miniature(),
        selector: this.selector(),
      },
    });
  }
}
