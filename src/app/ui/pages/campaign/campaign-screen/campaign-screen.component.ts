import { Component, Input } from '@angular/core';

@Component({
  selector: 'campaign-screen',
  templateUrl: './campaign-screen.component.html',
  styleUrls: ['./campaign-screen.component.scss'],
})
export class CampaignScreenComponent {
  @Input() scale = 0;
  @Input() image = '';
  @Input() time = 0;

  constructor() {}

  getLeft(): number {
    return this.time;
  }

  getBottom(value: number): number {
    return 2.25 * Math.sqrt(50 * 50 - (value - 50) * (value - 50)) - 110;
  }

  getSkyOpacity(): number {
    return Math.sqrt(1 - Math.pow(this.time / 50 - 1, 2));
  }
}
