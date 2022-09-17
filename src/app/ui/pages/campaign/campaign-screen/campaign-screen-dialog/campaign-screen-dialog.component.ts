import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../../../../../data/Campaign';

@Component({
  selector: 'campaign-screen-dialog',
  templateUrl: './campaign-screen-dialog.component.html',
  styleUrls: ['./campaign-screen-dialog.component.scss'],
})
export class CampaignScreenDialogComponent {
  image: FormControl<string | null>;
  time: FormControl<number | null>;
  value = 0;

  constructor(@Inject(MAT_DIALOG_DATA) readonly campaign: Campaign) {
    this.image = new FormControl<string>(this.campaign.screen.image);
    this.time = new FormControl<number>(this.campaign.screen.time);
  }

  onImage() {
    this.campaign.screen.image = this.image.value || '';
    this.campaign.screen.time = this.time.value || 0;
  }

  onSlider(value: number) {
    this.time.setValue(value);
  }
}
