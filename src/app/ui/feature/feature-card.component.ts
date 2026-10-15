import { Component, forwardRef, input } from '@angular/core';
import { Feature } from '../../data/entities/immutable/feature';
import { FeatureType } from '../../data/entities/immutable/values/enums/feature-type';
import { EntityCardComponent } from '../common/entity-card/entity-card.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { ListPipe } from '../pipes/list.pipe';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'feature-card',
  imports: [forwardRef(() => FormattedTextComponent), EntityCardComponent, ListPipe, MatIcon],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
})
export class FeatureCardComponent {
  FeatureType = FeatureType;

  feature = input<Feature | undefined>(undefined);
  imageIndex = input<number>(-1);
  flippable = input<boolean>(false);
  flipped = false;

  constructor() {}
}
