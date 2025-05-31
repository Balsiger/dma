import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from '../../../data/facts/campaign';
import { EntitiesService } from '../../../services/entity/entities.service';
import { CampaignService } from '../../../services/fact/campaign.service';
import { ItemCardComponent } from '../../item/item-card.component';

@Component({
  selector: 'dma-adventure-items-component',
  imports: [ItemCardComponent],
  templateUrl: './adventure-items.component.html',
  styleUrl: './adventure-items.component.scss',
})
export class AdventureItemsComponent {
  campaign = signal<Campaign | undefined>(undefined);
  encounters = computed(() => {
    return this.campaign()?.adventure()?.encounters();
  });
  items = computed(() => this.encounters()?.flatMap((e) => e.entity()?.items));

  constructor(
    private readonly route: ActivatedRoute,
    private readonly entitiesService: EntitiesService,
    private readonly campaignsService: CampaignService,
  ) {
    this.load();
  }

  private async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    const adventureName = this.route.snapshot.paramMap.get('adventure');

    if (campaignName && adventureName) {
      await this.entitiesService.ensureLoaded();
      this.campaign.set(this.campaignsService.get(campaignName));
    }
  }
}
