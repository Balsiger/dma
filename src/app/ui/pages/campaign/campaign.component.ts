import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/facts/campaign';
import { CampaignService } from '../../../services/fact/campaign.service';
import { AdventureBoxComponent } from '../../campaign/adventure-box/adventure-box.component';
import { DateTimeBoxComponent } from '../../campaign/date-time-box/date-time-box.component';
import { EncountersComponent } from '../../campaign/encounters/encounters.component';
import { EventsBoxComponent } from '../../campaign/events-box/events-box.component';
import { JournalBoxComponent } from '../../campaign/journal-box/journal-box.component';
import { LibraryBoxComponent } from '../../campaign/library-box/library-box.component';
import { MapBoxComponent } from '../../campaign/map-box/map-box.component';
import { MapSelectionBoxComponent } from '../../campaign/map-selection-box/map-selection-box.component';
import { PartyBoxComponent } from '../../campaign/party-box/party-box.component';
import { ScreenBoxComponent } from '../../campaign/screen-box/screen-box.component';
import { XpBoxComponent } from '../../campaign/xp-box/xp-box.component';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';
import { CampaignEditDialogComponent } from '../campaigns/campaign-edit-dialog/campaign-edit-dialog.component';

@Component({
  selector: 'campaign',
  standalone: true,
  imports: [
    AdventureBoxComponent,
    CommonModule,
    DateTimeBoxComponent,
    EncountersComponent,
    EventsBoxComponent,
    ExpandingBoxComponent,
    JournalBoxComponent,
    LibraryBoxComponent,
    MapBoxComponent,
    MapSelectionBoxComponent,
    PageComponent,
    PageTitleComponent,
    PartyBoxComponent,
    ScreenBoxComponent,
    SelectionTileComponent,
    XpBoxComponent,
  ],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss',
})
export class CampaignComponent {
  campaign?: Campaign;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly campaignService: CampaignService,
    private readonly dialog: MatDialog,
    private readonly router: Router,
  ) {
    this.load();
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

  private load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign = this.campaignService.get(campaignName);
      console.log('~~loaded campaign', this.campaign);
    }
    this.campaign?.load();
  }
}
