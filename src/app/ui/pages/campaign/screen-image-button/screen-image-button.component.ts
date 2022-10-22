import { Component, Input } from '@angular/core';
import { Campaign } from '../../../../data/Campaign';

@Component({
  selector: 'screen-image-button',
  templateUrl: './screen-image-button.component.html',
  styleUrls: ['./screen-image-button.component.scss'],
})
export class ScreenImageButtonComponent {
  @Input() campaign?: Campaign;
  @Input() image?: string;

  constructor() {}

  onClick() {
    if (this.campaign && this.image) {
      this.campaign.setScreenImage(this.image);
    }
  }
}
