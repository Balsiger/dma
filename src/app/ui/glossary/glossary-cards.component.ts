import { Component } from '@angular/core';
import { GlossaryType } from '../../data/entities/values/enums/glossary_type';
import { Version } from '../../data/entities/values/enums/version';
import { Glossary } from '../../data/facts/glossary';
import { EntitiesService } from '../../services/entity/entities.service';
import { GlossaryComponent } from './glossary.component';

@Component({
  selector: 'glossary-cards',
  imports: [GlossaryComponent],
  templateUrl: './glossary-cards.component.html',
  styleUrl: './glossary-cards.component.scss',
})
export class GlossaryCardsComponent {
  glossaries: Glossary[] = [];

  constructor(readonly entitiesService: EntitiesService) {
    this.init();
  }

  private async init() {
    await this.entitiesService.ensureLoaded();
    this.glossaries = this.entitiesService.glossary
      .getAllByVersion(Version.DND_5_24)
      .filter((g) => g.type === GlossaryType.CONDITION);
  }
}
