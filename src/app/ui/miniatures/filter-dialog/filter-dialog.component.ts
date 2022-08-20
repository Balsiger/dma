import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Rarity, Size } from 'src/app/data/miniature';
import { deserializeFilter, FilterData, MiniaturesService, serializeFilter } from 'src/app/data/miniatures.service';
import { DialogData } from '../miniatures.component';

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

  filter: FilterData = {
    name: "",
    rarities: [],
    sizes: [],
    types: [],
    subtypes: [],
    races: [],
    classes: [],
    locations: [],
    sets: [],
  };
  readonly rarities: string[] = Object.keys(Rarity).map(k => Rarity[k as keyof typeof Rarity]);
  readonly sizes: string[] = Object.keys(Size).map(k => Size[k as keyof typeof Size]);
  types: string[] = [];
  subtypes: string[] = [];
  races: string[] = [];
  classes: string[] = [];
  locations: string[] = [];
  sets: string[] = [];

  constructor(private readonly ref: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData,    
    private readonly route: ActivatedRoute, private readonly router: Router,
    private readonly miniatures: MiniaturesService) {
      ref.afterClosed().subscribe(() => {
        this.navigate(true);
      });
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
    const param = this.route.snapshot.queryParams['mini-filter'];
    if (param) {
      this.filter = deserializeFilter(param);
      // Change the values after drawing to prevent changes while drawing.
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
  }

  private navigate(history = false) {
    this.router.navigate([], {
      relativeTo: this.route, 
      // We add a temp parameter to ensure that we have different query params when history changes, 
      // or angular will ignore it.
      queryParams: { 'mini-filter': serializeFilter(this.filter), 'start': null, 'temp' : history ? null : '' }, 
      skipLocationChange: !history,
      queryParamsHandling: 'merge',
    });
  }

  onChangeName(value: string) {
    this.filter.name = value;
    this.navigate();
  }

  onChangeRarity(values: Rarity[]) {
    this.filter.rarities = values;
    this.navigate();
  }

  onChangeSize(values: Size[]) {
    this.filter.sizes = values;
    this.navigate();
  }

  onChangeType(values: string[]) {
    this.filter.types = values;
    this.navigate();
  }

  onChangeSubtype(values: string[]) {
    this.filter.subtypes = values;
    this.navigate();
  }

  onChangeRace(values: string[]) {
    this.filter.races = values;
    this.navigate();
  }

  onChangeClass(values: string[]) {
    this.filter.classes = values;
    this.navigate();
  }

  onChangeSet(values: string[]) {
    this.filter.sets = values;
    this.navigate();
  }

  onChangeLocation(values: string[]) {
    this.filter.locations = values;
    this.navigate();
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
    this.set.value = [];

    this.navigate();
  }

  onFilter() {
    this.ref.close();
  }
}
