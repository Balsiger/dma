import { Component, forwardRef, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Item } from '../../data/entities/item';
import { EntityCardComponent } from '../common/entity-card/entity-card.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { ListPipe } from '../pipes/list.pipe';

@Component({
  selector: 'item-card',
  imports: [MatIconModule, EntityCardComponent, forwardRef(() => FormattedTextComponent), ListPipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  item = input<Item | undefined>(undefined);
  id = input<string>('');
  imageIndex = input<number>(-1);
  flippable = input<boolean>(false);

  constructor() {}
}
