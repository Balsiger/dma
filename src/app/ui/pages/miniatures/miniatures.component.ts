import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { EMPTY, FilterData } from '../../../data/FilterData';
import { Location } from '../../../data/location';
import { deserializeFilter, MiniaturesService, serializeFilter } from '../../../services/miniatures.service';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { LocationDialogComponent } from './location-dialog/location-dialog.component';
import { MiniaturesGridComponent } from './miniatures-grid/miniatures-grid.component';

@Component({
  selector: 'miniatures',
  templateUrl: './miniatures.component.html',
  styleUrls: ['./miniatures.component.scss'],
})
export class MiniaturesComponent {
  @ViewChild(MiniaturesGridComponent) grid!: MiniaturesGridComponent;

  max = 10;
  start = 0;
  miniFilter = '';
  selectedFilter = EMPTY;

  filterDialog?: MatDialogRef<FilterDialogComponent, FilterData | undefined>;
  locationDialog?: MatDialogRef<LocationDialogComponent, Location[] | undefined>;

  constructor(
    private readonly miniatureService: MiniaturesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.start = Math.max(0, Number(params.get('start')));

      if (params.get('mini-filter') !== this.miniFilter) {
        this.miniFilter = params.get('mini-filter') || '';
        const filter = deserializeFilter(this.miniFilter);
        if (JSON.stringify(filter) !== JSON.stringify(this.selectedFilter)) {
          // Only set a new filter if it really changed. This avoids setting the filter on the grid needlessly.
          this.selectedFilter = filter;
        }
      }
    });
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
        },
      });

      const filter = await firstValueFrom(this.filterDialog.afterClosed());
      if (filter) {
        this.selectedFilter = filter;
        this.router.navigate([], {
          queryParams: { 'mini-filter': serializeFilter(this.selectedFilter), start: null },
          queryParamsHandling: 'merge',
        });
      }
    }
  }

  async onOpenLocations() {
    if (this.locationDialog?.getState() == MatDialogState.OPEN) {
      this.locationDialog.close();
      this.locationDialog = undefined;
    } else {
      this.miniatureService.getLocations().then(async (locations) => {
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
    this.grid.doFilter(filter);
  }
}
