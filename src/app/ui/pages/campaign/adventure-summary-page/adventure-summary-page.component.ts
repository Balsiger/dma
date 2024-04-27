import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adventure } from '../../../../data/facts/adventure';
import { CampaignService } from '../../../../services/fact/campaign.service';
import { AdventureSummaryComponent } from '../adventure-summary/adventure-summary.component';

@Component({
  selector: 'adventure-summary-page',
  templateUrl: './adventure-summary-page.component.html',
  styleUrls: ['./adventure-summary-page.component.scss'],
  standalone: true,
  imports: [AdventureSummaryComponent],
})
export class AdventureSummaryPageComponent {
  adventure?: Adventure;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly campaignsService: CampaignService,
  ) {
    this.load();
  }

  private async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    const adventureName = this.route.snapshot.paramMap.get('adventure');

    if (campaignName && adventureName) {
      const campaign = await this.campaignsService.get(campaignName);
      const adventure = await campaign.getAdventure(adventureName);
    }
  }
}
