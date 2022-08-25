import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterData } from "src/app/data/FilterData";
import { Rarity, Size } from 'src/app/data/miniature';
import { MiniaturesService } from 'src/app/services/miniatures.service';

export interface DialogData {
  update?: (filter: FilterData) => void;
  filter: FilterData,  
}

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit, AfterViewInit {

  @ViewChild('name') name!: ElementRef<HTMLInputElement>;
  @ViewChild('rarity') rarity!: MatSelect;
  @ViewChild('size') size!: MatSelect;
  @ViewChild('type') type!: MatSelect;
  @ViewChild('subtype') subtype!: MatSelect;
  @ViewChild('race') race!: MatSelect;
  @ViewChild('class') class!: MatSelect;
  @ViewChild('set') set!: MatSelect;

  filter: FilterData;
  readonly rarities: string[] = Object.keys(Rarity).map(k => Rarity[k as keyof typeof Rarity]);
  readonly sizes: string[] = Object.keys(Size).map(k => Size[k as keyof typeof Size]);
  types: string[] = [];
  subtypes: string[] = [];
  races: string[] = [];
  classes: string[] = [];
  locations: string[] = [];
  sets: string[] = [];

  constructor(private readonly ref: MatDialogRef<FilterDialogComponent, FilterData>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData,    
    private readonly route: ActivatedRoute, private readonly router: Router,
    private readonly miniatures: MiniaturesService) {
      this.filter = data.filter;
  }
  
  ngOnInit() {
    this.miniatures.getMiniatures().then(miniatures => {
      this.types = Array.from(new Set<string>(miniatures.map(miniature => miniature.type))).sort();
      this.subtypes = Array.from(new Set<string>(miniatures.flatMap(miniature => miniature.subtypes))).sort();
      this.races = Array.from(new Set<string>(miniatures.map(miniature => miniature.race))).sort();      
      this.classes = Array.from(new Set<string>(miniatures.flatMap(miniature => miniature.classes))).sort();      
      this.locations = Array.from(new Set<string>(miniatures.map(miniature => miniature.location))).sort();
      this.sets = Array.from(new Set<string>(miniatures.map(miniature => miniature.set))).sort();
    });
  }

  ngAfterViewInit() {
    // Prevent changes while updating.
    setTimeout(() => {
      this.name.nativeElement.value = this.filter.name;
      this.rarity.value = this.filter.rarities;
      this.size.value = this.filter.sizes;
      this.type.value = this.filter.types;
      this.subtype.value = this.filter.subtypes;
      this.race.value = this.filter.races;
      this.class.value = this.filter.classes;  
      this.set.value = this.filter.sets;
    });
  }

  private update() {
    if (this.data.update) {
      this.data.update(this.filter);
    }
  }

  onChangeName(value: string) {
    this.filter.name = value;
    this.update();
  }

  onChangeRarity(values: Rarity[]) {
    this.filter.rarities = values;
    this.update();
  }

  onChangeSize(values: Size[]) {
    this.filter.sizes = values;
    this.update();
  }

  onChangeType(values: string[]) {
    this.filter.types = values;
    this.update();
  }

  onChangeSubtype(values: string[]) {
    this.filter.subtypes = values;
    this.update();
  }

  onChangeRace(values: string[]) {
    this.filter.races = values;
    this.update();
  }

  onChangeClass(values: string[]) {
    this.filter.classes = values;
    this.update();
  }

  onChangeSet(values: string[]) {
    this.filter.sets = values;
    this.update();
  }

  onChangeLocation(values: string[]) {
    this.filter.locations = values;
    this.update();
  }

  onClear() {
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

  onFilter() {
    this.ref.close(this.filter);
  }
}
