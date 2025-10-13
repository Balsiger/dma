import { Component } from '@angular/core';
import { Utils } from '../../../common/utils';
import { GlossaryType } from '../../data/entities/values/enums/glossary_type';
import { Version } from '../../data/entities/values/enums/version';
import { Glossary } from '../../data/facts/glossary';
import { EntitiesService } from '../../services/entity/entities.service';
import { GlossaryCardComponent } from './glossary-card.component';

const CARDS_PER_PAGE = 9;

@Component({
  selector: 'glossary-cards',
  imports: [GlossaryCardComponent],
  templateUrl: './glossary-cards.component.html',
  styleUrl: './glossary-cards.component.scss',
})
export class GlossaryCardsComponent {
  glossaries: Glossary[] = [];
  pages: Glossary[][] = [];

  constructor(readonly entitiesService: EntitiesService) {
    this.init();
  }

  private async init() {
    await this.entitiesService.ensureLoaded();
    this.glossaries = this.entitiesService.glossary
      .getAllByVersion(Version.DND_5_24)
      .filter((g) => g.type === GlossaryType.CONDITION);

    this.pages = Utils.paginate(this.glossaries, CARDS_PER_PAGE);
  }
}
