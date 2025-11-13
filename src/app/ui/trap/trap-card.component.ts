import { Component, forwardRef, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Trap } from '../../data/entities/trap';
import { EntityCardComponent } from '../common/entity-card/entity-card.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';

@Component({
  selector: 'trap-card',
  imports: [MatIconModule, EntityCardComponent, forwardRef(() => FormattedTextComponent)],
  templateUrl: './trap-card.component.html',
  styleUrl: './trap-card.component.scss',
})
export class TrapCardComponent {
  trap = input<Trap | undefined>(undefined);
  id = input<string>('');
  imageIndex = input<number>(-1);
  flippable = input<boolean>(false);

  constructor() {}
}
