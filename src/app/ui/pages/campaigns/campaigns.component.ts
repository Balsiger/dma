import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/Campaign';
import { CampaignsService } from '../../../services/campaigns.service';
import { CampaignEditDialogComponent } from './campaign-edit-dialog/campaign-edit-dialog.component';

@Component({
  selector: 'campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
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
