import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ViewChild,
  computed,
  input,
  model,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Entity } from '../../data/entities/entity';
import { Campaign } from '../../data/facts/campaign';
import { ExpandingButtonComponent } from '../common/expanding-button/expanding-button.component';
import { Filter } from '../common/filtering-line/filtering-line.component';
import { FilteringComponent } from '../common/filtering/filtering.component';
import { DialogType } from '../dialogs/dialogs';
import { EntityTileComponent } from './entity-tile.component';

const PAGINATION_HEIGHT = 40;
const TILES_MIN = 4;
const TILE_WIDTH_SMALL = 80;
const TILE_WIDTH = 155;
const TILE_HEIGHT = 205;
const TILE_HEIGHT_SMALL = 105;
const TILE_HEIGHT_NO_IMAGE = 60;
const TILE_SMALL_LIMIT = 500;

@Component({
  selector: 'entities-grid',
  imports: [
    CommonModule,
    EntityTileComponent,
    MatIconModule,
    MatButtonModule,
    ExpandingButtonComponent,
    FilteringComponent,
  ],
  templateUrl: './entities-grid.component.html',
  styleUrl: './entities-grid.component.scss',
})
export class EntitiesGridComponent<T extends Entity<T>> implements AfterViewInit, OnChanges {
  campaign = input<Campaign>();
  start = model(0);
  entities = input<T[]>([]);
  filters = input<Filter[]>([]);
  type = input<DialogType>('monster');
  images = input(true);
  cover = input(false);
  withFilters = input(true);
  selector = input<(entity: T) => void>();

  @ViewChild('list') container?: ElementRef;

  tileWidth = computed(() => (this.offsetWidth() <= TILE_SMALL_LIMIT ? TILE_WIDTH_SMALL : TILE_WIDTH));
  tileHeight = computed(() =>
    this.images() ? (this.offsetWidth() <= TILE_SMALL_LIMIT ? TILE_HEIGHT_SMALL : TILE_HEIGHT) : TILE_HEIGHT_NO_IMAGE,
  );
  max = computed(() => this.computeMax());
  filteredEntities = signal<T[]>([]);
  offsetHeight = signal(0);
  offsetWidth = signal(0);

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['entities'] || changes['filters']) {
      this.filteredEntities.set(this.entities());
    }
  }

  ngAfterViewInit() {
    if (this.container) {
      this.offsetHeight.set(this.container.nativeElement.offsetHeight);
      this.offsetWidth.set(this.container.nativeElement.offsetWidth);

      const observer = new ResizeObserver((e) => {
        this.offsetHeight.set(this.container?.nativeElement.offsetHeight);
        this.offsetWidth.set(this.container?.nativeElement.offsetWidth);
      });
      observer.observe(this.container.nativeElement);
    }

    this.filteredEntities.set(this.entities());
  }

  onStart(start: number) {
    this.start.set(start);
  }

  computeMax(): number {
    let max =
      Math.floor((this.offsetHeight() - PAGINATION_HEIGHT) / this.tileHeight()) *
      Math.floor(this.offsetWidth() / this.tileWidth());

    return Math.max(max, TILES_MIN);
  }

  onFilter(selections: Map<string, any>) {
    this.filteredEntities.set(this.entities().filter((e) => e.matches(selections)));
    this.start.set(0);
  }
}
