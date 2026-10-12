import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Utils } from '../../../common/utils';
import { Feature } from '../../data/entities/immutable/feature';
import { Version } from '../../data/entities/immutable/values/enums/version';
import { ImmutablesService } from '../../services/immutable/immutables.service';
import { FeatureCardComponent } from './feature-card.component';

const CARDS_PER_PAGE = 9;

@Component({
  selector: 'feature-cards',
  imports: [FeatureCardComponent, MatCheckboxModule, FormsModule],
  templateUrl: './feature-cards.component.html',
  styleUrl: './feature-cards.component.scss',
})
export class featureCardsComponent {
  private features: Feature[] = [];
  pages: Feature[][] = [];

  constructor(readonly entitiesService: ImmutablesService) {
    this.init();
  }

  private async init() {
    await this.entitiesService.ensureLoaded();
    this.features = this.entitiesService.features.getAllByVersion(Version.DND_5_24);

    this.filter();
  }

  private filter() {
    //const filteredfeatures = this.features.filter((s) => this.inFilter(s));
    this.pages = Utils.paginate(this.features, CARDS_PER_PAGE);
  }

  onFilter() {
    this.filter();
  }
}
