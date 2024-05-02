import { Component, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/facts/campaign';
import { CampaignService } from '../../../services/fact/campaign.service';
import { CampaignEditDialogComponent } from '../../campaign/campaign-edit-dialog.component';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
  standalone: true,
  imports: [PageComponent, PageTitleComponent, SelectionTileComponent, MatButtonModule, MatIconModule],
})
export class CampaignsComponent {
  campaigns = computed(() => this.campaignsService.campaigns());
  editDialog?: MatDialogRef<CampaignEditDialogComponent, Campaign | undefined>;

  constructor(
    private readonly campaignsService: CampaignService,
    private readonly dialog: MatDialog,
  ) {}

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
        await this.campaignsService.save(campaign);
      }
    }
  }
}
