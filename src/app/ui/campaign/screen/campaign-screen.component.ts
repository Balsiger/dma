import { Component, input } from '@angular/core';
import { Campaign } from '../../../data/facts/campaign';
import { InitiativeParticipantComponent } from '../initiative-queue/initiative-participant.component';

@Component({
  selector: 'campaign-screen',
  templateUrl: './campaign-screen.component.html',
  styleUrls: ['./campaign-screen.component.scss'],
  standalone: true,
  imports: [InitiativeParticipantComponent],
})
export class CampaignScreenComponent {
  scale = input(1);
  campaign = input<Campaign>();

  get time(): number {
    return this.campaign()?.dateTime().getPercentsOfDay() || 0;
  }

  get moon(): number {
    return this.campaign()?.dateTime().moonPhase || 0;
  }

  constructor() {}

  getLeft(): number {
    return this.time;
  }

  getShadowRotation(): number {
    return 0;
  }

  getBottom(value: number): number {
    return 2.25 * Math.sqrt(50 * 50 - (value - 50) * (value - 50)) - 110;
  }

  getSkyOpacity(): number {
    return Math.sqrt(1 - Math.pow(this.time / 50 - 1, 2));
  }
}
