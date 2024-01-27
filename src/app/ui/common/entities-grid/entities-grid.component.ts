import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Entity } from '../../../data/entities/entity';
import { EntityTileComponent } from '../entity-tile/entity-tile.component';

let TILE_WIDTH = 155;
let TILE_HEIGHT = 195;
let PAGINATION_HEIGHT = 40;
const MINIATURE_MIN = 4;

@Component({
  selector: 'entities-grid',
  standalone: true,
  imports: [CommonModule, EntityTileComponent, MatIconModule, MatButtonModule],
  templateUrl: './entities-grid.component.html',
  styleUrl: './entities-grid.component.scss'
})
export class EntitiesGridComponent<T extends Entity<T>> implements AfterViewInit {
  @Input() start = 0;
  @Input() entities: T[] = [];

  @ViewChild('list') container?: ElementRef;

  max = 10;

  constructor() {
    if (window.innerWidth <= 500) {
      TILE_WIDTH = 80;
      TILE_HEIGHT = 105;
    }
  }

  ngAfterViewInit() {
    // Do after the paint cycle to avoid changing values while painting.
    setTimeout(() => this.onResized(), 0);
  }

  onStart(start: number) {
    this.start = start;
  }

  onResized() {
    this.max =
      Math.floor((this.container?.nativeElement.offsetHeight - PAGINATION_HEIGHT) / TILE_HEIGHT) *
      Math.floor(this.container?.nativeElement.offsetWidth / TILE_WIDTH);
    this.max = Math.max(this.max, MINIATURE_MIN);
  }
}
