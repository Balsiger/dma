import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Adventure } from '../../../data/facts/adventure';
import { Campaign } from '../../../data/facts/campaign';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { AdventureSummaryDialogComponent } from '../adventure/adventure-summary-dialog.component';
import { CampaignScreenComponent } from './campaign-screen.component';

const WINDOW_SCREEN = 'dma-campaign-screen';
const WINDOW_MAP = 'dma-campaign-map';

@Component({
  selector: 'screen-box',
  imports: [
    CommonModule,
    ExpandingBoxComponent,
    CampaignScreenComponent,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './screen-box.component.html',
  styleUrl: './screen-box.component.scss',
})
export class ScreenBoxComponent {
  campaign = input<Campaign>();
  adventure = input<Adventure>();
  screenImage = input<string>();

  image = new FormControl(this.screenImage() || '');

  constructor(private readonly dialog: MatDialog) {
    effect(() => this.image.setValue(this.screenImage() || ''));
  }

  onImageChange() {
    this.campaign()?.setScreenImage(this.image.value || '');
  }

  onScreen() {
    if (this.campaign()) {
      window.open('/screen/' + this.campaign()!.name, WINDOW_SCREEN);
    }
  }

  onMap() {
    if (this.campaign) {
      window.open('/map/' + this.campaign()!.name, WINDOW_MAP);
    }
  }

  onSummarize() {
    this.dialog.open(AdventureSummaryDialogComponent, {
      hasBackdrop: true,
      minWidth: '90vw',
      minHeight: '90vh',
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        adventure: this.adventure(),
      },
    });
  }

  onClear() {
    this.campaign()?.setScreenImage('');
  }
}
