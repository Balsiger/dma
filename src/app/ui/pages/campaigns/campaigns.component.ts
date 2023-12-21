import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/things/campaign';
import { CampaignsService } from '../../../services/campaigns.service';
import { CampaignEditDialogComponent } from './campaign-edit-dialog/campaign-edit-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';
import { NgFor } from '@angular/common';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';

@Component({
    selector: 'campaigns',
    templateUrl: './campaigns.component.html',
    styleUrls: ['./campaigns.component.scss'],
    standalone: true,
    imports: [
        PageComponent,
        PageTitleComponent,
        NgFor,
        SelectionTileComponent,
        MatButtonModule,
        MatIconModule,
    ],
})
export class CampaignsComponent {
  campaigns: Campaign[] = [];
  editDialog?: MatDialogRef<CampaignEditDialogComponent, Campaign | undefined>;

  constructor(private readonly campaignsService: CampaignsService, private readonly dialog: MatDialog) {
    this.campaigns = this.campaignsService.campaigns;
  }

  async onAdd() {
    if (this.editDialog) {
      this.editDialog.close();
      this.editDialog = undefined;
    } else {
      this.editDialog = this.dialog.open(CampaignEditDialogComponent, {
        hasBackdrop: true,
        disableClose: true,
      });

      const campaign = await firstValueFrom(this.editDialog.afterClosed());
      if (campaign) {
        await this.campaignsService.add(campaign);
      }
    }
  }
}
