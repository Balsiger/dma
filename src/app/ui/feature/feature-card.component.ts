import { Component, forwardRef, input } from '@angular/core';
import { Feature } from '../../data/entities/immutable/feature';
import { EntityCardComponent } from '../common/entity-card/entity-card.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';

@Component({
  selector: 'feature-card',
  imports: [forwardRef(() => FormattedTextComponent), EntityCardComponent],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
})
export class FeatureCardComponent {
  feature = input<Feature | undefined>(undefined);
  imageIndex = input<number>(-1);
  flippable = input<boolean>(false);
  flipped = false;

  constructor() {}
}
