import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adventure } from '../../../../data/facts/adventure';
import { CampaignsService } from '../../../../services/campaigns.service';
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
    private readonly campaignsService: CampaignsService,
  ) {
    this.load();
  }

  private async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    const adventureName = this.route.snapshot.paramMap.get('adventure');

    if (campaignName && adventureName) {
      const campaign = await this.campaignsService.getCampaign(campaignName);
      const adventure = await campaign.getAdventure(adventureName);
      await adventure?.load();
      this.adventure = adventure; // Only assing it once it's loaded to not trigger update too early.
    }
  }
}
