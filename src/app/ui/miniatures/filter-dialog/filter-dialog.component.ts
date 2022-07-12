import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { Rarity, Size } from 'src/app/data/miniature';
import { FilterData, MiniaturesService } from 'src/app/data/miniatures.service';
import { DialogData } from '../miniatures.component';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {

  @ViewChild('name') name!: ElementRef<HTMLInputElement>;
  @ViewChild('rarity') rarity!: MatSelect;
  @ViewChild('size') size!: MatSelect;
  @ViewChild('type') type!: MatSelect;
  @ViewChild('subtype') subtype!: MatSelect;
  @ViewChild('race') race!: MatSelect;
  @ViewChild('class') class!: MatSelect;

  readonly filter: FilterData = {
    name: "",
    rarities: [],
    sizes: [],
    types: [],
    subtypes: [],
    races: [],
    classes: [],
    locations: [],
  };
  readonly rarities: string[] = Object.keys(Rarity).map(k => Rarity[k as keyof typeof Rarity]);
  readonly sizes: string[] = Object.keys(Size).map(k => Size[k as keyof typeof Size]);
  types: string[] = [];
  subtypes: string[] = [];
  races: string[] = [];
  classes: string[] = [];
  locations: string[] = [];

  constructor(private readonly ref: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData,
    private readonly miniatures: MiniaturesService) {}
  
  ngOnInit() {
    this.miniatures.getMiniatures().then(miniatures => {
      this.types = Array.from(new Set<string>(miniatures.map(miniature => miniature.type))).sort();
      this.subtypes = Array.from(new Set<string>(miniatures.flatMap(miniature => miniature.subtypes))).sort();
      this.races = Array.from(new Set<string>(miniatures.map(miniature => miniature.race))).sort();      
      this.classes = Array.from(new Set<string>(miniatures.flatMap(miniature => miniature.classes))).sort();      
      this.locations = Array.from(new Set<string>(miniatures.map(miniature => miniature.location))).sort();
    });
  }

  onChangeName(value: string) {
    this.filter.name = value;
    this.data.parent.filter(this.filter)
  }

  onChangeRarity(values: Rarity[]) {
    this.filter.rarities = values;
    this.data.parent.filter(this.filter);
  }

  onChangeSize(values: Size[]) {
    this.filter.sizes = values;
    this.data.parent.filter(this.filter);
  }

  onChangeType(values: string[]) {
    this.filter.types = values;
    this.data.parent.filter(this.filter);
  }

  onChangeSubtype(values: string[]) {
    this.filter.subtypes = values;
    this.data.parent.filter(this.filter);
  }

  onChangeRace(values: string[]) {
    this.filter.races = values;
    this.data.parent.filter(this.filter);
  }

  onChangeClass(values: string[]) {
    this.filter.classes = values;
    this.data.parent.filter(this.filter);
  }

  onChangeLocation(values: string[]) {
    this.filter.locations = values;
    this.data.parent.filter(this.filter);
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
  }
}
