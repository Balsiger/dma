import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Miniature } from '../../data/entities/miniature';
import { Campaign } from '../../data/facts/campaign';
import { ChipComponent } from '../common/chip/chip.component';
import { LocationComponent } from './location/location.component';
import { MiniatureDetailsComponent } from './miniature-details.component';

export interface Data {
  miniature: Miniature;
  campaign?: Campaign;
  selector?: (miniature: Miniature) => void;
}

@Component({
  selector: 'miniature-dialog',
  standalone: true,
  imports: [CommonModule, MiniatureDetailsComponent, ChipComponent, LocationComponent, MatIconModule, MatButtonModule],
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
    changeDetector: ChangeDetectorRef,
  ) {
    this.miniature = data.miniature;
    this.campaign = data.campaign;
    this.selector = data.selector;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }

  onSelect() {
    if (this.selector) {
      this.selector(this.miniature);
      this.ref.close();
    }
  }
}
