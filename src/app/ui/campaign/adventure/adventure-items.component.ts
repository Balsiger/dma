import { Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { Utils } from '../../../../common/utils';
import { Item } from '../../../data/entities/item';
import { Parametrized } from '../../../data/entities/parametrized';
import { Campaign } from '../../../data/facts/campaign';
import { EntitiesService } from '../../../services/entity/entities.service';
import { CampaignService } from '../../../services/fact/campaign.service';
import { ItemCardComponent } from '../../item/item-card.component';

const CARDS_PER_PAGE = 9;

@Component({
  selector: 'dma-adventure-items-component',
  imports: [ItemCardComponent, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './adventure-items.component.html',
  styleUrl: './adventure-items.component.scss',
})
export class AdventureItemsComponent {
  campaign = signal<Campaign | undefined>(undefined);
  encounters = computed(() => {
    return this.campaign()?.adventure()?.encounters();
  });
  pages = computed(() => Utils.paginate(this.extractItems(), CARDS_PER_PAGE));
  encounterRegExp = model<string>('');

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

  private extractItems(): { id: string; item: Parametrized<Item> }[] {
    const regex = new RegExp(this.encounterRegExp(), 'i');
    return (
      this.encounters()
        ?.filter((e) => regex.test(e.entity()?.shortName || ''))
        .flatMap((e) => e.entity()?.items.map((i) => ({ id: e.entity()?.shortName || '', item: i })) || [])
        .slice(0, 9) || []
    );
  }
}
