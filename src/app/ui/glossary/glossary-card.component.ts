import { Component, input } from '@angular/core';
import { Glossary } from '../../data/facts/glossary';
import { EntityCardComponent } from '../common/entity-card/entity-card.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';

@Component({
  selector: 'glossary-card',
  imports: [EntityCardComponent, FormattedTextComponent],
  templateUrl: './glossary-card.component.html',
  styleUrl: './glossary-card.component.scss',
})
export class GlossaryCardComponent {
  flippable = input(false);
  imageIndex = input(-1);

  glossary = input<Glossary | undefined>(undefined);
}
