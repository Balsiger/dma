import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Entity } from '../../../data/entities/entity';
import { DialogType } from '../dialogs';
import { EntityTileComponent } from '../entity-tile/entity-tile.component';
import { ExpandingButtonComponent } from '../expanding-button/expanding-button.component';
import { Filter } from '../filtering-line/filtering-line.component';
import { FilteringComponent } from '../filtering/filtering.component';

let TILE_WIDTH = 155;
let TILE_HEIGHT = 205;
let PAGINATION_HEIGHT = 40;
const TILES_MIN = 4;

@Component({
  selector: 'entities-grid',
  standalone: true,
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
  @Input() start = 0;
  @Input() entities: T[] = [];
  @Input() filters: Filter[] = [];
  @Input() type: DialogType = 'monster';
  @Input() images = true;
  @Input() withFilters = true;
  @Input() selector?: (entity: T) => void;

  @ViewChild('list') container?: ElementRef;

  max = 10;
  filteredEntities: T[] = [];

  constructor(private readonly changeDetector: ChangeDetectorRef) {
    if (window.innerWidth <= 500) {
      TILE_WIDTH = 80;
      TILE_HEIGHT = 105;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entities'] || changes['filters']) {
      this.filteredEntities = this.entities;
      this.start = 0;
      this.recomputeMax();
    }
  }

  ngAfterViewInit() {
    if (this.container) {
      const observer = new ResizeObserver((e) => {
        this.recomputeMax();
      });
      observer.observe(this.container.nativeElement);
    }

    if (!this.images) {
      TILE_HEIGHT = 60;
    }
  }

  onStart(start: number) {
    this.start = start;
  }

  recomputeMax() {
    this.max =
      Math.floor((this.container?.nativeElement.offsetHeight - PAGINATION_HEIGHT) / TILE_HEIGHT) *
      Math.floor(this.container?.nativeElement.offsetWidth / TILE_WIDTH);
    this.max = Math.max(this.max, TILES_MIN);

    // Need to trigger change detection to ensure that the grid of tiles is properly updated.
    this.changeDetector.detectChanges();
  }

  onFilter(selections: Map<string, any>) {
    this.filteredEntities = this.entities.filter((e) => e.matches(selections));
  }
}
