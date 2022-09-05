import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adventure } from '../../../../data/adventure';
import { Campaign } from '../../../../data/Campaign';
import { Encounter } from '../../../../data/encounter';
import { CampaignsService } from '../../../../services/campaigns.service';

@Component({
  selector: 'adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent {
  campaign?: Campaign;
  adventure?: Adventure;
  selectedEncounter?: Encounter;

  constructor(private readonly campaignService: CampaignsService, private readonly route: ActivatedRoute,
    private readonly router: Router) {
    this.load();
  }

  private async load() {
    this.campaign = await this.campaignService.loadCampaign(this.route.snapshot.paramMap.get('campaign'));
    this.adventure = await this.campaign?.getAdventure(this.route.snapshot.paramMap.get('adventure'));
    await this.adventure?.load();

    const id = this.route.snapshot.paramMap.get('id');
    if (id && this.adventure?.encounters) {
      for (const encounter of this.adventure.encounters) {
        if (encounter.id === id) {
          this.selectedEncounter = encounter;
        }
      }
    }
  }

  async onEncounterChange() {
    if (this.selectedEncounter) {
      await this.router.navigate(['campaign', this.campaign?.name, 'adventure', this.adventure?.name,
        this.selectedEncounter.id]);
    }
  }
}
