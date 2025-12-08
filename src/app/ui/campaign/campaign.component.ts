import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../data/facts/campaign';
import { EntitiesService } from '../../services/entity/entities.service';
import { CampaignService } from '../../services/fact/campaign.service';
import { BottomOverlayComponent } from '../common/bottom-overlay/bottom-overlay.component';
import { LibraryBoxComponent } from '../library/library-box.component';
import { PageTitleComponent } from '../pages/page-title.component';
import { PageComponent } from '../pages/page.component';
import { AdventureBoxComponent } from './adventure/adventure-box.component';
import { CampaignEditDialogComponent } from './campaign-edit-dialog.component';
import { DateTimeBoxComponent } from './date-time/date-time-box.component';
import { EncountersComponent } from './encounter/encounters.component';
import { EventsBoxComponent } from './event/events-box.component';
import { InitiativeQueueComponent } from './initiative-queue/initiative-queue.component';
import { JournalBoxComponent } from './journal/journal-box.component';
import { MapBoxComponent } from './map/map-box.component';
import { MapSelectionBoxComponent } from './map/map-selection-box.component';
import { PartyBoxComponent } from './party/party-box.component';
import { ScreenBoxComponent } from './screen/screen-box.component';
import { XpBoxComponent } from './xp/xp-box.component';
import { SearchBoxComponent } from './search-box.component';

@Component({
  selector: 'campaign',
  imports: [
    AdventureBoxComponent,
    CommonModule,
    DateTimeBoxComponent,
    EncountersComponent,
    EventsBoxComponent,
    JournalBoxComponent,
    LibraryBoxComponent,
    MapBoxComponent,
    MapSelectionBoxComponent,
    PageComponent,
    PageTitleComponent,
    PartyBoxComponent,
    ScreenBoxComponent,
    XpBoxComponent,
    BottomOverlayComponent,
    InitiativeQueueComponent,
    SearchBoxComponent,
  ],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss',
})
export class CampaignComponent {
  campaign?: Campaign;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly campaignService: CampaignService,
    private readonly entitiesService: EntitiesService,
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
      if (this.campaign) {
        await this.campaignService.update(this.campaign, campaign);
      } else {
        await this.campaignService.save(campaign);
      }

      if (this.campaign && this.campaign.name !== campaign.name) {
        await this.router.navigate(['campaign', campaign.name], { queryParamsHandling: 'merge' });
      }
      this.load();
    }
  }

  private async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      await this.entitiesService.ensureLoaded();
      this.campaign = this.campaignService.get(campaignName);
    }
  }
}
