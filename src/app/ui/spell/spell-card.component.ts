import { Component, computed, forwardRef, input } from '@angular/core';
import { Spell } from '../../data/entities/spell';
import { EntitiesService } from '../../services/entity/entities.service';
import { EntityCardComponent } from '../common/entity-card/entity-card.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';

@Component({
  selector: 'spell-card',
  imports: [forwardRef(() => FormattedTextComponent), EntityCardComponent],
  templateUrl: './spell-card.component.html',
  styleUrl: './spell-card.component.scss',
})
export class SpellCardComponent {
  spell = input<Spell | undefined>(undefined);
  imageIndex = input<number>(-1);
  flippable = input<boolean>(false);
  flipped = false;

  playerDescriptions = computed(() =>
    this.spell() ? this.spell()?.computePlayerDescriptions(this.entitiesService.spells) : [],
  );

  constructor(private readonly entitiesService: EntitiesService) {}
}
