import { Component, Input } from '@angular/core';
import { Campaign } from '../../../../data/things/campaign';

@Component({
  selector: 'campaign-screen',
  templateUrl: './campaign-screen.component.html',
  styleUrls: ['./campaign-screen.component.scss'],
})
export class CampaignScreenComponent {
  @Input() scale = 1;
  @Input() campaign?: Campaign;

  get time(): number {
    return this.campaign?.dateTime?.getPercentsOfDay() || 0;
  }

  get moon(): number {
    return this.campaign?.dateTime?.moonPhase || 0;
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
