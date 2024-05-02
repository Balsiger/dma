import { Component, OnInit, input, output } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Rarity } from '../../../data/entities/values/enums/rarity';
import { Size } from '../../../data/entities/values/size';
import { LocationFilter } from '../../../data/facts/factoids/location';
import { MiniaturesService } from '../../../services/entity/miniatures.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule],
})
export class FilterComponent implements OnInit {
  filter = input.required<LocationFilter>();
  newFilter = output<LocationFilter>();

  readonly sizes: Size[] = Size.sizes; //.map((s) => s.name);
  rarities = Rarity.probabilities.map((r) => r.name);
  types: string[] = [];
  subtypes: string[] = [];
  races: string[] = [];
  classes: string[] = [];
  locations: string[] = [];
  sets: string[] = [];

  constructor(private readonly miniatures: MiniaturesService) {}

  async ngOnInit() {
    this.types = await this.miniatures.getAllTypes();
    this.subtypes = await this.miniatures.getAllSubtypes();
    this.races = await this.miniatures.getAllRaces();
    this.classes = await this.miniatures.getAllClasses();
    this.locations = await this.miniatures.getAllLocations();
    this.sets = await this.miniatures.getAllSets();
  }

  private update() {
    if (this.filter()) {
      this.newFilter.emit(this.filter());
    }
  }

  onChangeName(value: string) {
    if (this.filter()) {
      this.filter().name = value;
      this.update();
    }
  }

  onChangeRarity(values: Rarity[]) {
    if (this.filter()) {
      this.filter().rarities = values;
      this.update();
    }
  }

  onChangeSize(values: Size[]) {
    if (this.filter()) {
      this.filter().sizes = values;
      this.update();
    }
  }

  onChangeType(values: string[]) {
    if (this.filter()) {
      this.filter().types = values;
      this.update();
    }
  }

  onChangeSubtype(values: string[]) {
    if (this.filter()) {
      this.filter().subtypes = values;
      this.update();
    }
  }

  onChangeRace(values: string[]) {
    if (this.filter()) {
      this.filter().races = values;
      this.update();
    }
  }

  onChangeClass(values: string[]) {
    if (this.filter()) {
      this.filter().classes = values;
      this.update();
    }
  }

  onChangeSet(values: string[]) {
    if (this.filter()) {
      this.filter().sets = values;
      this.update();
    }
  }

  onChangeLocation(values: string[]) {
    if (this.filter()) {
      this.filter().locations = values;
      this.update();
    }
  }

  clear() {
    if (this.filter()) {
      this.filter().name = '';
      this.filter().rarities = [];
      this.filter().sizes = [];
      this.filter().types = [];
      this.filter().subtypes = [];
      this.filter().races = [];
      this.filter().classes = [];
      this.filter().sets = [];

      this.update();
    }
  }
}
