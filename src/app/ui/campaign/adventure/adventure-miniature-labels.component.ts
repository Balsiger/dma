import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utils } from '../../../../common/utils';
import { Adventure } from '../../../data/facts/adventure';
import { UserMiniatures } from '../../../data/facts/user-miniature';
import { CampaignService } from '../../../services/fact/campaign.service';
import { UserMiniatureService } from '../../../services/fact/user-miniature.service';

@Component({
    selector: 'adventure-miniature-labels',
    imports: [],
    templateUrl: './adventure-miniature-labels.component.html',
    styleUrl: './adventure-miniature-labels.component.scss'
})
export class AdventureMiniatureLabelsComponent {
  adventure = signal<Adventure | undefined>(undefined);
  locations = computed(() => this.computeLocations(this.adventure()));
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
      const campaign = this.campaignsService.get(campaignName);
      this.adventure.set(await campaign.getAdventure(adventureName));

      this.userMiniatures = this.userMiniatureService.get(UserMiniatures.ID);
    }
  }

  private computeLocations(adventure?: Adventure): [string, string[]][] {
    if (!adventure || !this.userMiniatures) {
      return [];
    }

    const locationNames = new Set<string>();
    for (const encounter of this.adventure()!.encounters()) {
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

    return locations.map((l) => [l.name, l.shortSummary()]);
  }
}
