import { Component, forwardRef, input } from '@angular/core';
import { Group } from '../../data/entities/immutable/group';
import { EntityCardComponent } from '../common/entity-card/entity-card.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';

@Component({
  selector: 'group-card',
  imports: [forwardRef(() => FormattedTextComponent), EntityCardComponent],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.scss',
})
export class GroupCardComponent {
  group = input<Group | undefined>(undefined);
  imageIndex = input<number>(-1);
  flippable = input<boolean>(false);
  flipped = false;

  constructor() {}
}
