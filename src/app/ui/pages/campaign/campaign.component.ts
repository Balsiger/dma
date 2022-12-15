import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Adventure } from '../../../data/things/adventure';
import { Campaign } from '../../../data/things/campaign';
import { CampaignsService } from '../../../services/campaigns.service';
import { CampaignEditDialogComponent } from '../campaigns/campaign-edit-dialog/campaign-edit-dialog.component';
import { AdventureEditDialogComponent } from './adventure-edit-dialog/adventure-edit-dialog.component';
import { AdventureEvent } from './journal/adventure-event';
import { AdventureEventEditDialogComponent } from './journal/adventure-event-edit-dialog/adventure-event-edit-dialog.component';
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

  async onEditAdventure(adventure?: Adventure) {
    const dialog = this.dialog.open(AdventureEditDialogComponent, {
      data: { campaign: this.campaign, adventure: adventure },
    });

    const newAdventure = await firstValueFrom(dialog.afterClosed());
    if (newAdventure) {
      await this.campaignService.setAdventure(newAdventure);
      this.load();
    }
  }

  async onDeleteAdventure(adventure: Adventure) {
    if (confirm("Do you really want to delete adventure '" + adventure.name + "'?")) {
      await this.campaignService.deleteAdventure(adventure);
      this.load();
    }
  }

  async onEditAdventureEvent(event: AdventureEvent | undefined = undefined) {
    const dialog = this.dialog.open(AdventureEventEditDialogComponent, {
      minWidth: '460px',
      data: {
        campaign: this.campaign,
        event: event,
      },
    });

    const newEvent = await firstValueFrom(dialog.afterClosed());
    if (newEvent) {
      if (newEvent.notes) {
        this.campaignService.setAdventureEvent(newEvent);
      } else {
        this.campaignService.deleteAdventureEvent(newEvent);
      }
      this.load();
    }
  }
}
