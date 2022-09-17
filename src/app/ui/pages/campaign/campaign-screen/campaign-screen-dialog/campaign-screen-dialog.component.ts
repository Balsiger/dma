import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../../../../../data/Campaign';
import { CampaignsService } from '../../../../../services/campaigns.service';

const WINDOW_NAME = 'dma-campaign-screen';

@Component({
  selector: 'campaign-screen-dialog',
  templateUrl: './campaign-screen-dialog.component.html',
  styleUrls: ['./campaign-screen-dialog.component.scss'],
})
export class CampaignScreenDialogComponent {
  image: FormControl<string | null>;
  time: FormControl<number | null>;
  value = 0;

  constructor(private readonly campaignsService: CampaignsService, @Inject(MAT_DIALOG_DATA) public campaign: Campaign) {
    this.image = new FormControl<string>(this.campaign.screenImage);
    this.time = new FormControl<number>(this.campaign.dateTime.getPercentsOfDay());

    window.open('/screen/' + campaign.name, WINDOW_NAME);
  }

  onImage() {
    const campaign = this.campaign.withScreenImage(this.image.value || '');
    this.campaignsService.change(this.campaign, campaign);
    this.campaign = campaign;
  }

  onSlider(value: number) {
    this.time.setValue(value);
  }
}
