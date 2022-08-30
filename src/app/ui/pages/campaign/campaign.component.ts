import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/Campaign';
import { CampaignsService } from '../../../services/campaigns.service';
import { CampaignEditDialogComponent } from '../campaigns/campaign-edit-dialog/campaign-edit-dialog.component';

@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent {
  campaign?: Campaign = undefined;
  editDialog?: MatDialogRef<CampaignEditDialogComponent, Campaign | undefined>;

  constructor(private readonly campaignService: CampaignsService, private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog, private readonly router: Router) {
    this.load();
  }

  private async load() {
    this.campaign = await this.campaignService.loadCampaign(this.route.snapshot.paramMap.get('name'));
    this.campaign?.loadCharacters(this.campaignService);
  }

  async onEdit() {
    if (this.editDialog) {
      this.editDialog.close();
      this.editDialog = undefined;
    } else {
      this.editDialog = this.dialog.open(CampaignEditDialogComponent, {
        hasBackdrop: true,
        disableClose: true,
        data: this.campaign,
      });

      const campaign = await firstValueFrom(this.editDialog.afterClosed());
      if (campaign) {
        await this.campaignService.change(this.campaign, campaign);
        if (this.campaign && this.campaign.name !== campaign.name) {
          await this.router.navigate(['campaign', campaign.name], { queryParamsHandling: 'merge' });
        }
        this.load();
      }
    }
  }
}
