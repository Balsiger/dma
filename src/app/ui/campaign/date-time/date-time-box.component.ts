import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/facts/campaign';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import {
  InitiativeSetupDialogComponent,
  ParticipantInitiative,
} from '../initiative-queue/initiative-setup-dialog.component';

@Component({
    selector: 'date-time-box',
    imports: [CommonModule, ExpandingBoxComponent, MatButtonModule],
    templateUrl: './date-time-box.component.html',
    styleUrl: './date-time-box.component.scss'
})
export class DateTimeBoxComponent {
  campaign = input<Campaign>();

  constructor(private readonly dialog: MatDialog) {}

  async onStartBattle() {
    const dialog = this.dialog.open(InitiativeSetupDialogComponent, {
      hasBackdrop: true,
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: this.campaign()?.characters() || [],
    });

    const participants = await firstValueFrom(dialog.afterClosed());
    if (participants) {
      participants.sort((a: ParticipantInitiative, b: ParticipantInitiative) => b.initiative - a.initiative);
      this.campaign()?.startBattle(participants.map((p: ParticipantInitiative) => p.name));
    }
  }
}
