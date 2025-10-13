import { Component, input } from '@angular/core';
import { Version } from '../../../data/entities/values/enums/version';

@Component({
  selector: 'entity-card',
  imports: [],
  templateUrl: './entity-card.component.html',
  styleUrl: './entity-card.component.scss',
})
export class EntityCardComponent {
  flipped = false;
  flippable = input(false);
  imageIndex = input(-1);
  version = input(Version.UNDEFINED);

  name = input('');
  image = input('');
  tagline = input('');
  references = input('');
  symbol = input(false);

  onFlip() {
    if (!this.flippable()) {
      return;
    }

    this.flipped = !this.flipped;
  }
}
