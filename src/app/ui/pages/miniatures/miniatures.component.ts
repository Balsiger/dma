import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { Miniature } from '../../../data/entities/miniature';
import { Campaign } from '../../../data/facts/campaign';
import { MiniaturesService } from '../../../services/entity/miniatures.service';
import { EntitiesGridComponent } from '../../common/entities-grid/entities-grid.component';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';
import { LocationDialogComponent } from './location-dialog/location-dialog.component';

@Component({
  selector: 'miniatures',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './miniatures.component.html',
  styleUrl: './miniatures.component.scss',
})
export class MiniaturesComponent {
  @Input() embed = false;
  @Input() campaign?: Campaign;
  miniatures: Miniature[] = [];
  filters: Filter[] = [];

  // TODO: Replace the following with proper enums.
  types: string[] = [];
  subtypes: string[] = [];
  races: string[] = [];
  classes: string[] = [];
  locations: string[] = [];
  sets: string[] = [];

  constructor(
    private readonly dialog: MatDialog,
    private readonly miniatureService: MiniaturesService,
  ) {
    this.load();
  }

  async load() {
    this.miniatures = await this.miniatureService.getAll();
    this.filters = await this.miniatureService.getFilters();
  }

  onEditLocation() {
    this.miniatureService.getLocations().then(async (locations) => {
      const dialog = this.dialog.open(LocationDialogComponent, {
        hasBackdrop: true,
        disableClose: true,
        data: [...locations],
      });

      const savedLocations = await firstValueFrom(dialog.afterClosed());
      if (savedLocations) {
        this.miniatureService.saveLocations(savedLocations);
      }
    });
  }
}
