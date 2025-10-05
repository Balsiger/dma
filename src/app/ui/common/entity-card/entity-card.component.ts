import { Component, input } from '@angular/core';

@Component({
  selector: 'entity-card',
  imports: [],
  templateUrl: './entity-card.component.html',
  styleUrl: './entity-card.component.scss',
})
export class EntityCardComponent {
  flipped = false;
  flippable = input<boolean>(false);
  imageIndex = input<number>(-1);

  name = input<string>('');
  image = input<string>('');
  tagline = input<string>('');
  references = input<string>('');

  onFlip() {
    if (!this.flippable()) {
      return;
    }

    this.flipped = !this.flipped;
  }
}
