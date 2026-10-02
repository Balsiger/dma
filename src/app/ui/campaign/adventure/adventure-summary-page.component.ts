import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adventure } from '../../../data/entities/fluid/adventure';
import { FluidCampaignService } from '../../../services/fluid/campaign.service';
import { AdventureSummaryComponent } from './adventure-summary.component';

@Component({
  selector: 'adventure-summary-page',
  templateUrl: './adventure-summary-page.component.html',
  styleUrls: ['./adventure-summary-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [AdventureSummaryComponent],
})
export class AdventureSummaryPageComponent {
  adventure = signal<Adventure | undefined>(undefined);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly campaignsService: FluidCampaignService,
  ) {
    this.load();
  }

  private async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    const adventureName = this.route.snapshot.paramMap.get('adventure');

    if (campaignName && adventureName) {
      const campaign = this.campaignsService.get(campaignName);
      this.adventure.set(await campaign.getAdventure(adventureName));
    }
  }
}
