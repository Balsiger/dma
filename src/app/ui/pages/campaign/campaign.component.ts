import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Adventure } from '../../../data/facts/adventure';
import { Campaign } from '../../../data/facts/campaign';
import { CampaignService } from '../../../services/fact/campaign.service';
import { AreaContainerComponent } from '../../common/area-container/area-container.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';
import { CampaignEditDialogComponent } from '../campaigns/campaign-edit-dialog/campaign-edit-dialog.component';
import { AdventureEditDialogComponent } from './adventure-edit-dialog/adventure-edit-dialog.component';
import { CampaignScreenComponent } from './campaign-screen/campaign-screen.component';
import { AdventureEvent } from './journal/adventure-event';
import { AdventureEventEditDialogComponent } from './journal/adventure-event-edit-dialog/adventure-event-edit-dialog.component';
import { JournalComponent } from './journal/journal.component';
import { XpDialogComponent } from './xp-dialog/xp-dialog.component';

const WINDOW_NAME = 'dma-campaign-screen';

@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    PageComponent,
    PageTitleComponent,
    AreaContainerComponent,
    MatButtonModule,
    CampaignScreenComponent,
    MatIconModule,
    NgFor,
    JournalComponent,
    SelectionTileComponent,
    MatTooltipModule,
    RouterLink,
  ],
})
export class CampaignComponent {
  campaign?: Campaign = undefined;

  constructor(
    private readonly campaignService: CampaignService,
    private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog,
    private readonly router: Router,
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
