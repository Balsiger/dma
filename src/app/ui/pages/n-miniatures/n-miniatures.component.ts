import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Miniature } from '../../../data/entities/miniature';
import { Rarity } from '../../../data/values/enums/rarity';
import { Size } from '../../../data/values/size';
import { MiniaturesService } from '../../../services/miniatures.service';
import { EntitiesGridComponent } from '../../common/entities-grid/entities-grid.component';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';

@Component({
  selector: 'app-n-miniatures',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './n-miniatures.component.html',
  styleUrl: './n-miniatures.component.scss'
})
export class NMiniaturesComponent {
  miniatures: Miniature[] = [];
  filters: Filter[] = [];

  // TODO: Replace the following with proper enums.
  types: string[] = [];
  subtypes: string[] = [];
  races: string[] = [];
  classes: string[] = [];
  locations: string[] = [];
  sets: string[] = [];

  constructor(private readonly miniatureService: MiniaturesService) {
    this.load();
  }

  async load() {
    this.miniatures = await this.miniatureService.getAll();
    this.types = await this.miniatureService.getAllTypes();
    this.subtypes = await this.miniatureService.getAllSubtypes();
    this.races = await this.miniatureService.getAllRaces();
    this.classes = await this.miniatureService.getAllClasses();
    this.locations = await this.miniatureService.getAllLocations();
    this.sets = await this.miniatureService.getAllSets();

    this.filters = [{
      label: 'Name',
    }, {
      label: 'Size',
      options: Size.sizes.map(s => ({label: s.name, value: s })),
      multiple: true,
    }, {
      label:  'Rarity',
      options: Rarity.probabilities.map(r => ({label: r.name, value: r })),
      multiple: true,
    }, {
      label:  'Type',
      options: this.types.map(t => ({ label: t, value: t })),
      multiple: true,
    }, {
      label:  'Subtype',
      options: this.subtypes.map(t => ({ label: t, value: t })),
      multiple: true,
    }, {
      label:  'Race',
      options: this.races.map(t => ({ label: t, value: t })),
      multiple: true,
    }, {
      label:  'Class',
      options: this.classes.map(t => ({ label: t, value: t })),
      multiple: true,
    }, {
      label:  'Location',
      options: this.locations.map(t => ({ label: t, value: t })),
      multiple: true,
    }, {
      label:  'Set',
      options: this.sets.map(t => ({ label: t, value: t })),
      multiple: true,
    }];
  }
}
