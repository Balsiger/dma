import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/things/campaign';
import { CampaignsService } from '../../../services/campaigns.service';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { AdventureEvent } from '../../pages/campaign/journal/adventure-event';
import { AdventureEventEditDialogComponent } from '../../pages/campaign/journal/adventure-event-edit-dialog/adventure-event-edit-dialog.component';

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
    private readonly campaignService: CampaignsService,
    private readonly dialog: MatDialog,
  ) {}

  onShown() {
    // Scroll the current day into view.
    const firstNoPast = this.eventElements?.find((e) => !e.nativeElement.classList.contains('past'));
    firstNoPast?.nativeElement?.scrollIntoView();
  }

  async onEdit(event?: AdventureEvent) {
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
      this.campaign?.reloadEvents();
    }
  }
}
