import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Item } from '../../data/entities/item';
import { EntitiesService } from '../../services/entity/entities.service';
import { EntityCardComponent } from '../common/entity-card/entity-card.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { FormatterPipe } from '../pipes/formatter.pipe';

@Component({
  selector: 'item-card',
  imports: [FormatterPipe, MatIconModule, EntityCardComponent, FormattedTextComponent],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  item = input<Item | undefined>(undefined);
  id = input<string>('');
  imageIndex = input<number>(-1);
  flippable = input<boolean>(false);

  playerDescriptions = computed(() => this.item()?.computePlayerDescriptions(this.entitiesService.items) ?? []);

  constructor(private readonly entitiesService: EntitiesService) {}
}
