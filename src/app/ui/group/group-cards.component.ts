import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Utils } from '../../../common/utils';
import { Group } from '../../data/entities/immutable/group';
import { Version } from '../../data/entities/immutable/values/enums/version';
import { ImmutablesService } from '../../services/immutable/immutables.service';
import { MonsterCardComponent } from '../monster/monster-card.component';
import { GroupCardComponent } from './group-card.component';

const CARDS_PER_PAGE = 9;

@Component({
  selector: 'group-cards',
  imports: [GroupCardComponent, MatCheckboxModule, FormsModule, MonsterCardComponent],
  templateUrl: './group-cards.component.html',
  styleUrl: './group-cards.component.scss',
})
export class GroupCardsComponent {
  private groups: Group[] = [];
  pages: Group[][] = [];

  constructor(readonly entitiesService: ImmutablesService) {
    this.init();
  }

  private async init() {
    await this.entitiesService.ensureLoaded();
    this.groups = this.entitiesService.groups.getAllByVersion(Version.DND_5_24);

    this.filter();
  }

  private filter() {
    //const filteredGroups = this.groups.filter((s) => this.inFilter(s));
    this.pages = Utils.paginate(this.groups, CARDS_PER_PAGE);
  }

  onFilter() {
    this.filter();
  }
}
