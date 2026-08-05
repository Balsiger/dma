import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utils } from '../../../../common/utils';
import { Adventure } from '../../../data/facts/adventure';
import { Campaign } from '../../../data/facts/campaign';
import { Location } from '../../../data/facts/factoids/location';
import { UserMiniatures } from '../../../data/facts/user-miniature';
import { CampaignService } from '../../../services/fact/campaign.service';
import { UserMiniatureService } from '../../../services/fact/user-miniature.service';

@Component({
  selector: 'adventure-miniature-labels',
  imports: [],
  templateUrl: './adventure-miniature-labels.component.html',
  styleUrl: './adventure-miniature-labels.component.scss',
})
export class AdventureMiniatureLabelsComponent {
  campaign = signal<Campaign | undefined>(undefined);
  adventure = signal<Adventure | undefined>(undefined);
  locations = computed(() => this.computeLocations(this.campaign()?.adventure()));
  allLocations: Location[] = [];
  userMiniatures?: UserMiniatures;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly campaignsService: CampaignService,
    private readonly userMiniatureService: UserMiniatureService,
  ) {
    this.load();
  }

  private async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    const adventureName = this.route.snapshot.paramMap.get('adventure');

    if (campaignName && adventureName) {
      this.campaign.set(this.campaignsService.get(campaignName));
      this.userMiniatures = this.userMiniatureService.get(UserMiniatures.ID);
      await this.userMiniatureService.ensureLoaded();
      this.allLocations = [...this.userMiniatures.locationsByName().entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map((e) => e[1]);
    }
  }

  private computeLocations(adventure?: Adventure): [string, string[]][] {
    if (!adventure || !this.userMiniatures) {
      return [];
    }

    const locationNames = new Set<string>();
    for (const encounter of adventure.encounters()) {
      for (const selections of encounter.miniatures().values()) {
        for (const selection of selections) {
          locationNames.add(selection.location);
        }
      }
    }

    const locations = [...locationNames]
      .toSorted()
      .map((n) => this.userMiniatures?.locationsByName().get(n))
      .filter(Utils.isDefined);

    return locations.map((l) => [l.name, l.shortSummaries()]);
  }
}
