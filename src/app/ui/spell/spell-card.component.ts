import { Component, forwardRef, input, ChangeDetectionStrategy } from '@angular/core';
import { Spell } from '../../data/entities/immutable/spell';
import { EntityCardComponent } from '../common/entity-card/entity-card.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';

@Component({
  selector: 'spell-card',
  imports: [forwardRef(() => FormattedTextComponent), EntityCardComponent],
  templateUrl: './spell-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './spell-card.component.scss',
})
export class SpellCardComponent {
  spell = input<Spell | undefined>(undefined);
  imageIndex = input<number>(-1);
  flippable = input<boolean>(false);
  flipped = false;

  constructor() {}
}
