import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/Campaign';
import { CampaignsService } from '../../../services/campaigns.service';
import { CampaignEditDialogComponent } from '../campaigns/campaign-edit-dialog/campaign-edit-dialog.component';
import { XpDialogComponent } from './xp-dialog/xp-dialog.component';

const WINDOW_NAME = 'dma-campaign-screen';

@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent {
  campaign?: Campaign = undefined;

  constructor(
    private readonly campaignService: CampaignsService,
    private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog,
    private readonly router: Router
  ) {
    this.load();
  }

  private load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign = this.campaignService.getCampaign(campaignName);
    }
    this.campaign?.load();
  }

  async onEdit() {
    const dialog = this.dialog.open(CampaignEditDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: this.campaign,
    });

    const campaign = await firstValueFrom(dialog.afterClosed());
    if (campaign) {
      await this.campaignService.change(this.campaign, campaign);
      if (this.campaign && this.campaign.name !== campaign.name) {
        await this.router.navigate(['campaign', campaign.name], { queryParamsHandling: 'merge' });
      }
      this.load();
    }
  }

  onXP() {
    this.dialog.open(XpDialogComponent, { data: this.campaign });
  }

  onScreen() {
    if (this.campaign) {
      window.open('/screen/' + this.campaign.name, WINDOW_NAME);
    }
  }

  onMap() {}
}
