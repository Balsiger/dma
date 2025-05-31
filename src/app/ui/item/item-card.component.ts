import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Item } from '../../data/entities/item';
import { EntitiesService } from '../../services/entity/entities.service';
import { FormatterPipe } from '../pipes/formatter.pipe';

@Component({
    selector: 'item-card',
    imports: [FormatterPipe, MatIconModule],
    templateUrl: './item-card.component.html',
    styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  item = input<Item | undefined>(undefined);
  id = input<string>('');
  imageIndex = input<number>(-1);

  constructor(readonly entitiesService: EntitiesService) {}

  computePlayerDescriptions(): string[] {
    const item = this.item();
    if (item) {
      return item.computePlayerDescriptions(this.entitiesService.items);
    }

    return [];
  }
}
