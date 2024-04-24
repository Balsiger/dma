import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/facts/campaign';
import { CampaignService } from '../../../services/fact/campaign.service';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { AdventureEventEditDialogComponent } from '../../pages/campaign/journal/adventure-event-edit-dialog/adventure-event-edit-dialog.component';
import { CampaignEvent } from '../../pages/campaign/journal/campaign-event';

@Component({
  selector: 'events-box',
  standalone: true,
  imports: [CommonModule, ExpandingBoxComponent, MatIconModule, MatButtonModule],
  templateUrl: './events-box.component.html',
  styleUrl: './events-box.component.scss',
})
export class EventsBoxComponent {
  @Input() campaign?: Campaign;

  @ViewChildren('event') eventElements?: QueryList<ElementRef>;

  constructor(
    private readonly campaignService: CampaignService,
    private readonly dialog: MatDialog,
  ) {}

  onShown() {
    // Scroll the current day into view.
    const firstNoPast = this.eventElements?.find((e) => !e.nativeElement.classList.contains('past'));
    firstNoPast?.nativeElement?.scrollIntoView();
  }

  async onEdit(event?: CampaignEvent) {
    const dialog = this.dialog.open(AdventureEventEditDialogComponent, {
      minWidth: '460px',
      data: {
        campaign: this.campaign,
        event: event,
      },
    });

    const newEvent = await firstValueFrom(dialog.afterClosed());
    if (newEvent) {
      this.campaign?.addEvent(newEvent);
    }
  }
}
