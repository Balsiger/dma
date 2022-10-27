import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { FilterData } from '../../../../data/FilterData';
import { Rarity } from '../../../../data/miniature';
import { Size } from '../../../../data/size';
import { MiniaturesService } from '../../../../services/miniatures.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnChanges {
  @Input() filter?: FilterData;
  @Output() newFilter = new EventEmitter<FilterData>();

  @ViewChild('name')
  name!: ElementRef<HTMLInputElement>;
  @ViewChild('rarity') rarity!: MatSelect;
  @ViewChild('size') size!: MatSelect;
  @ViewChild('type') type!: MatSelect;
  @ViewChild('subtype') subtype!: MatSelect;
  @ViewChild('race') race!: MatSelect;
  @ViewChild('class') class!: MatSelect;
  @ViewChild('set') set!: MatSelect;

  readonly rarities: string[] = Object.keys(Rarity).map((k) => Rarity[k as keyof typeof Rarity]);
  readonly sizes: Size[] = Size.sizes; //.map((s) => s.name);
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filter'] && this.filter) {
      this.name.nativeElement.value = this.filter.name;
      this.rarity.value = this.filter.rarities;
      this.size.value = this.filter.sizes;
      this.type.value = this.filter.types;
      this.subtype.value = this.filter.subtypes;
      this.race.value = this.filter.races;
      this.class.value = this.filter.classes;
      this.set.value = this.filter.sets;
    }
  }

  private update() {
    if (this.filter) {
      this.newFilter.emit(this.filter);
    }
  }

  onChangeName(value: string) {
    if (this.filter) {
      this.filter.name = value;
      this.update();
    }
  }

  onChangeRarity(values: Rarity[]) {
    if (this.filter) {
      this.filter.rarities = values;
      this.update();
    }
  }

  onChangeSize(values: Size[]) {
    if (this.filter) {
      this.filter.sizes = values;
      this.update();
    }
  }

  onChangeType(values: string[]) {
    if (this.filter) {
      this.filter.types = values;
      this.update();
    }
  }

  onChangeSubtype(values: string[]) {
    if (this.filter) {
      this.filter.subtypes = values;
      this.update();
    }
  }

  onChangeRace(values: string[]) {
    if (this.filter) {
      this.filter.races = values;
      this.update();
    }
  }

  onChangeClass(values: string[]) {
    if (this.filter) {
      this.filter.classes = values;
      this.update();
    }
  }

  onChangeSet(values: string[]) {
    if (this.filter) {
      this.filter.sets = values;
      this.update();
    }
  }

  onChangeLocation(values: string[]) {
    if (this.filter) {
      this.filter.locations = values;
      this.update();
    }
  }

  clear() {
    if (this.filter) {
      this.filter.name = '';
      this.name.nativeElement.value = '';
      this.filter.rarities = [];
      this.rarity.value = [];
      this.filter.sizes = [];
      this.size.value = [];
      this.filter.types = [];
      this.type.value = [];
      this.filter.subtypes = [];
      this.subtype.value = [];
      this.filter.races = [];
      this.race.value = [];
      this.filter.classes = [];
      this.class.value = [];
      this.filter.sets = [];
      this.set.value = [];

      this.update();
    }
  }
}
