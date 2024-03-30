import { LowerCasePipe, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Monster } from '../../../../data/entities/monster';
import { Campaign } from '../../../../data/facts/campaign';
import { FormattedTextComponent } from '../../../common/formatted-text/formatted-text.component';
import { MonsterComponent } from '../monster/monster.component';
import { ScreenImageButtonComponent } from '../screen-image-button/screen-image-button.component';

export interface Data {
  monster: Monster;
  campaign?: Campaign;
}

@Component({
  standalone: true,
  selector: 'monster-dialog',
  templateUrl: './monster-dialog.component.html',
  styleUrls: ['./monster-dialog.component.scss'],
  imports: [MonsterComponent, ScreenImageButtonComponent, FormattedTextComponent, LowerCasePipe, NgFor],
})
export class MonsterDialogComponent {
  readonly monster: Monster;
  readonly campaign?: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data, changeDetector: ChangeDetectorRef) {
    this.monster = data.monster;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
