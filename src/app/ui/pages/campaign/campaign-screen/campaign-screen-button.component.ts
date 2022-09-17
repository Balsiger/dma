import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Campaign } from '../../../../data/Campaign';
import { CampaignScreenDialogComponent } from './campaign-screen-dialog/campaign-screen-dialog.component';

@Component({
  selector: 'campaign-screen-button',
  templateUrl: './campaign-screen-button.component.html',
  styleUrls: ['./campaign-screen-button.component.scss'],
})
export class CampaignScreenButtonComponent {
  @Input() campaign!: Campaign;

  private screenDialog?: MatDialogRef<CampaignScreenDialogComponent>;

  constructor(private readonly dialog: MatDialog) {}

  onClick() {
    this.screenDialog = this.dialog.open(CampaignScreenDialogComponent, {
      data: this.campaign,
    });
  }
}
