import { Component, Input } from '@angular/core';
import { Campaign } from '../../../../data/things/campaign';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'screen-image-button',
  templateUrl: './screen-image-button.component.html',
  styleUrl: './screen-image-button.component.scss',
  standalone: true,
  imports: [MatIconModule],
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
