import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { Adventure } from '../../../data/things/adventure';
import { Campaign } from '../../../data/things/campaign';
import { CampaignsService } from '../../../services/campaigns.service';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';
import { AdventureEditDialogComponent } from '../../pages/campaign/adventure-edit-dialog/adventure-edit-dialog.component';
import { AdventureSummaryDialogComponent } from '../../pages/campaign/adventure-summary-dialog/adventure-summary-dialog.component';

@Component({
  selector: 'adventure-box',
  standalone: true,
  imports: [CommonModule, ExpandingBoxComponent, SelectionTileComponent, MatIconModule, MatButtonModule],
  templateUrl: './adventure-box.component.html',
  styleUrl: './adventure-box.component.scss',
})
export class AdventureBoxComponent {
  @Input() campaign?: Campaign;

  constructor(
    private readonly campaignService: CampaignsService,
    private readonly dialog: MatDialog,
  ) {}

  async onEditAdventure(adventure?: Adventure) {
    const dialog = this.dialog.open(AdventureEditDialogComponent, {
      data: { campaign: this.campaign, adventure: adventure },
    });

    const newAdventure = await firstValueFrom(dialog.afterClosed());
    if (newAdventure) {
      await this.campaignService.setAdventure(newAdventure);
      this.campaign?.reloadAdventures();
    }
  }

  async onDeleteAdventure(adventure: Adventure) {
    if (confirm("Do you really want to delete adventure '" + adventure.name + "'?")) {
      await this.campaignService.deleteAdventure(adventure);
      this.campaign?.reloadAdventures();
    }
  }

  onSummarize(adventure: Adventure) {
    this.dialog.open(AdventureSummaryDialogComponent, {
      hasBackdrop: true,
      minWidth: '90vw',
      minHeight: '90vh',
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        adventure: adventure,
      },
    });
  }
}
