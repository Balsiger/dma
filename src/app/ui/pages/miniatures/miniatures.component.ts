import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { Miniature } from '../../../data/entities/miniature';
import { Campaign } from '../../../data/facts/campaign';
import { UserMiniatures } from '../../../data/facts/user-miniature';
import { EntitiesService } from '../../../services/entity/entities.service';
import { MiniaturesService } from '../../../services/entity/miniatures.service';
import { UserMiniatureService } from '../../../services/fact/user-miniature.service';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../../entities/entities-grid.component';
import { LocationDialogComponent } from '../../miniatures/location/location-dialog.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'miniatures',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './miniatures.component.html',
  styleUrl: './miniatures.component.scss',
})
export class MiniaturesComponent {
  embed = input(false);
  campaign = input<Campaign>();

  miniatures: Miniature[] = [];
  filters: Filter[] = [];
  userMiniatures?: UserMiniatures;

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
    private readonly entitiesService: EntitiesService,
    private readonly userMiniatureService: UserMiniatureService,
  ) {
    this.load();
  }

  async load() {
    this.miniatures = this.entitiesService.miniatures.getAll();
    this.filters = await this.miniatureService.getFilters();
    this.userMiniatures = this.userMiniatureService.get(UserMiniatures.ID);
  }

  async onEditLocation() {
    if (this.userMiniatures) {
      const dialog = this.dialog.open(LocationDialogComponent, {
        hasBackdrop: true,
        disableClose: true,
        data: [...this.userMiniatures.locations()],
      });

      const savedLocations = await firstValueFrom(dialog.afterClosed());
      if (savedLocations) {
        this.userMiniatures.setLocations(savedLocations);
      }
    }
  }
}
