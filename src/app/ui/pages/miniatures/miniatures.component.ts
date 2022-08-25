import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { EMPTY, FilterData } from '../../../data/FilterData';
import { Location } from '../../../data/location';
import { Miniature } from '../../../data/miniature';
import { deserializeFilter, MiniaturesService, serializeFilter } from '../../../services/miniatures.service';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { LocationDialogComponent } from './location-dialog/location-dialog.component';

const MINIATURE_WIDTH = 150;
const MINIATURE_HEIGHT = 200;
const MINIATURE_MIN = 4;


@Component({
  selector: 'miniatures',
  templateUrl: './miniatures.component.html',
  styleUrls: ['./miniatures.component.scss'],
  host: { '(window:resize)': 'onResized()' }
})
export class MiniaturesComponent implements AfterViewInit {
  
  @ViewChild('list') container? : ElementRef;

  miniatures: Miniature[] = [];
  max = 10;
  start = 0;
  miniFilter = '';
  selectedFilter = EMPTY;

  filterDialog?: MatDialogRef<FilterDialogComponent>;
  locationDialog?: MatDialogRef<LocationDialogComponent, Location[]|undefined>;

  constructor(private readonly miniatureService: MiniaturesService, 
    private readonly route: ActivatedRoute, private readonly router: Router, private readonly dialog: MatDialog) { 
      this.route.queryParamMap.subscribe((params) => {
        this.start = Math.max(0, Number(params.get('start')));

        if (params.get('mini-filter') !== this.miniFilter) {
          this.miniFilter = params.get('mini-filter') || '';
          this.selectedFilter = deserializeFilter(this.miniFilter);
          this.filter(this.selectedFilter);
        }
      });
  }

  ngAfterViewInit(): void {
    // Do after the paint cycle to avoid changing values while painting.
    setTimeout(() => this.onResized(), 0);
  }

  onResized() {
    this.max = Math.floor((this.container?.nativeElement.offsetHeight)  / MINIATURE_HEIGHT) * 
      Math.floor(this.container?.nativeElement.offsetWidth / MINIATURE_WIDTH);
    this.max = Math.max(this.max, MINIATURE_MIN);
  }

  onStart(start: number) {
    this.router.navigate([], {
      relativeTo: this.route, 
      queryParams: { start: Math.max(0, start) }, 
      queryParamsHandling: 'merge',
    });
  }

  async onOpenFilter() {
    if (this.filterDialog?.getState() === MatDialogState.OPEN) {
      this.filterDialog.close();
      this.filterDialog = undefined;
    } else {
      this.filterDialog = this.dialog.open(FilterDialogComponent, {
        position: {
          top: '130px',
          left: '40px',
        },
        data: {
          update: this.filter.bind(this),
          filter: this.selectedFilter,
        }
      });

      const filter = await firstValueFrom(this.filterDialog.afterClosed());
      if (filter) {
        this.selectedFilter = filter;
        this.router.navigate([], {
          queryParams: { 'mini-filter': serializeFilter(this.selectedFilter), 'start': null }, 
          queryParamsHandling: 'merge',
        });
      }
    }
  }

  async onOpenLocations() {
    if (this.locationDialog?.getState() == MatDialogState.OPEN)     {
      this.locationDialog.close();
      this.locationDialog = undefined;
    } else {
      this.miniatureService.getLocations().then(async (locations) => {
        console.log('~~locations', locations);;
        this.locationDialog = this.dialog.open(LocationDialogComponent, {
          hasBackdrop: true,
          disableClose: true,
          data: [...locations],
        });

        const savedLocations = await firstValueFrom(this.locationDialog.afterClosed());
        if (savedLocations) {
          this.miniatureService.saveLocations(savedLocations);
        }
      });
    }
  }

  filter(filter: FilterData) {
    this.miniatureService.getMiniatures(filter).then((miniatures) => this.update(miniatures));
  }

  private update(miniatures: Miniature[]) {
    this.miniatures = miniatures;
  }
}
