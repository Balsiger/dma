import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Miniature } from '../../../data/entities/miniature';
import { Campaign } from '../../../data/things/campaign';
import { ChipComponent } from '../../common/chip/chip.component';
import { LocationComponent } from '../../common/location/location.component';
import { MiniatureDetailsComponent } from '../../pages/miniatures/miniature-details/miniature-details.component';

export interface Data {
  miniature: Miniature;
  campaign?: Campaign;
  selector?: (miniature: Miniature) => void;
}

@Component({
  selector: 'miniature-dialog',
  standalone: true,
  imports: [CommonModule, MiniatureDetailsComponent, ChipComponent, LocationComponent, MatIconModule],
  templateUrl: './miniature-dialog.component.html',
  styleUrl: './miniature-dialog.component.scss',
})
export class MiniatureDialogComponent {
  readonly miniature: Miniature;
  readonly campaign?: Campaign;
  readonly selector?: (miniature: Miniature) => void;

  constructor(
    private readonly ref: MatDialogRef<MiniatureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: Data,
  ) {
    this.miniature = data.miniature;
    this.campaign = data.campaign;
    this.selector = data.selector;
  }

  onSelect() {
    if (this.selector) {
      this.selector(this.miniature);
      this.ref.close();
    }
  }
}
