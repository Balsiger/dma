import { Component, input } from '@angular/core';
import { Item } from '../../data/entities/item';
import { FormatterPipe } from '../pipes/formatter.pipe';

@Component({
  selector: 'item-card',
  standalone: true,
  imports: [FormatterPipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  item = input<Item | undefined>(undefined);
  id = input<string>('');
  imageIndex = input<number>(-1);
}
