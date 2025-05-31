import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { Adventure } from '../../../data/facts/adventure';
import { Campaign } from '../../../data/facts/campaign';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';
import { AdventureEditDialogComponent } from './adventure-edit-dialog.component';
import { AdventureSummaryDialogComponent } from './adventure-summary-dialog.component';

@Component({
    selector: 'adventure-box',
    imports: [CommonModule, ExpandingBoxComponent, SelectionTileComponent, MatIconModule, MatButtonModule],
    templateUrl: './adventure-box.component.html',
    styleUrl: './adventure-box.component.scss'
})
export class AdventureBoxComponent {
  campaign = input<Campaign>();

  constructor(private readonly dialog: MatDialog) {}

  async onEditAdventure(adventure?: Adventure) {
    const dialog = this.dialog.open(AdventureEditDialogComponent, {
      data: { campaign: this.campaign(), adventure: adventure },
    });

    const newAdventure = await firstValueFrom(dialog.afterClosed());
    if (newAdventure) {
      this.campaign()?.setAdventure(newAdventure);
    }
  }

  async onDeleteAdventure(adventure: Adventure) {
    if (confirm("Do you really want to delete adventure '" + adventure.name + "'?")) {
      this.campaign()?.deleteAdventure(adventure);
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
