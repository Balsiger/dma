import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from '../../../../data/facts/campaign';
import { CampaignService } from '../../../../services/fact/campaign.service';
import { CampaignScreenComponent } from '../campaign-screen/campaign-screen.component';

@Component({
  selector: 'campaign-screen-container',
  templateUrl: './campaign-screen-container.component.html',
  styleUrls: ['./campaign-screen-container.component.scss'],
  standalone: true,
  imports: [CampaignScreenComponent],
})
export class CampaignScreenContainerComponent {
  campaign?: Campaign;

  constructor(
    private readonly campaignService: CampaignService,
    private readonly route: ActivatedRoute,
  ) {
    this.load();
  }

  async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign = await this.campaignService.get(campaignName);
    }
    this.campaign?.load();
  }
}
