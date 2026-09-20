import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Campaign } from '../../../data/entities/fluid/campaign';
import { Quote } from '../../../data/entities/static/values/quote';

@Component({
  selector: 'screen-image-button',
  templateUrl: './screen-image-button.component.html',
  styleUrl: './screen-image-button.component.scss',
  imports: [MatIconModule],
})
export class ScreenImageButtonComponent {
  campaign = input<Campaign>();
  image = input('');
  quote = input<Quote | undefined>(undefined);

  constructor() {}

  onClick() {
    if (this.campaign()) {
      if (this.image()) {
        this.campaign()?.setScreenImage(this.image());
      }

      if (this.quote()) {
        this.campaign()?.setQuote(this.quote());
      }
    }
  }
}
