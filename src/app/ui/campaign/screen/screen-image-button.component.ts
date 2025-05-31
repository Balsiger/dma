import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Campaign } from '../../../data/facts/campaign';

@Component({
    selector: 'screen-image-button',
    templateUrl: './screen-image-button.component.html',
    styleUrl: './screen-image-button.component.scss',
    imports: [MatIconModule]
})
export class ScreenImageButtonComponent {
  campaign = input<Campaign>();
  image = input('');

  constructor() {}

  onClick() {
    if (this.campaign() && this.image()) {
      this.campaign()?.setScreenImage(this.image());
    }
  }
}
