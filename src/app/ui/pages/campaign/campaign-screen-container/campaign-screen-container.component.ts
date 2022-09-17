import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign, EMPTY } from '../../../../data/Campaign';
import { CampaignsService } from '../../../../services/campaigns.service';

@Component({
  selector: 'campaign-screen-container',
  templateUrl: './campaign-screen-container.component.html',
  styleUrls: ['./campaign-screen-container.component.scss'],
})
export class CampaignScreenContainerComponent {
  campaign: Campaign = EMPTY;

  constructor(private readonly campaignService: CampaignsService, private readonly route: ActivatedRoute) {
    this.load();
  }

  async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign = await this.campaignService.getCampaign(campaignName);
    }
    this.campaign?.load();
  }
}
