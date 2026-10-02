import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from '../../../data/entities/fluid/campaign';
import { FluidCampaignService } from '../../../services/fluid/campaign.service';
import { CampaignScreenComponent } from './campaign-screen.component';

@Component({
  selector: 'campaign-screen-container',
  templateUrl: './campaign-screen-container.component.html',
  styleUrls: ['./campaign-screen-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CampaignScreenComponent],
})
export class CampaignScreenContainerComponent {
  campaign = signal<Campaign | undefined>(undefined);

  constructor(
    private readonly campaignService: FluidCampaignService,
    private readonly route: ActivatedRoute,
  ) {
    this.load();
  }

  async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign.set(this.campaignService.get(campaignName));
    }
  }
}
