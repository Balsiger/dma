import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Miniature } from '../../../../data/entities/miniature';
import { FilterData } from '../../../../data/filter_data';
import { MiniaturesService } from '../../../../services/miniatures.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MiniatureComponent } from '../miniature/miniature.component';
import { NgFor, SlicePipe } from '@angular/common';

let MINIATURE_WIDTH = 155;
let MINIATURE_HEIGHT = 195;
let PAGINATION_HEIGHT = 40;
const MINIATURE_MIN = 4;

@Component({
    selector: 'miniatures-grid',
    templateUrl: './miniatures-grid.component.html',
    styleUrls: ['./miniatures-grid.component.scss'],
    host: { '(window:resize)': 'onResized()' },
    standalone: true,
    imports: [
        NgFor,
        MiniatureComponent,
        MatButtonModule,
        MatIconModule,
        SlicePipe,
    ],
})
export class MiniaturesGridComponent implements OnChanges, AfterViewInit {
  @Input() start = 0;
  @Output() newStart = new EventEmitter<number>();
  @Input() filter?: FilterData;
  @Input() selector?: (miniature: Miniature) => void;

  @ViewChild('list') container?: ElementRef;

  miniatures: Miniature[] = [];
  max = 10;

  constructor(private readonly miniatureService: MiniaturesService) {
    if (window.innerWidth <= 500) {
      MINIATURE_WIDTH = 80;
      MINIATURE_HEIGHT = 105;
    }
  }

  ngAfterViewInit() {
    // Do after the paint cycle to avoid changing values while painting.
    setTimeout(() => this.onResized(), 0);
  }

  onStart(start: number) {
    this.start = start;
    this.newStart.emit(start);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filter'] && this.filter) {
      this.doFilter(this.filter, !changes['filter'].firstChange);
    }
  }

  doFilter(filter: FilterData, resetStart = true) {
    if (resetStart) {
      this.onStart(0);
    }
    this.miniatureService.getMiniatures(filter).then((miniatures) => this.update(miniatures));
  }

  onResized() {
    this.max =
      Math.floor((this.container?.nativeElement.offsetHeight - PAGINATION_HEIGHT) / MINIATURE_HEIGHT) *
      Math.floor(this.container?.nativeElement.offsetWidth / MINIATURE_WIDTH);
    this.max = Math.max(this.max, MINIATURE_MIN);
  }

  private update(miniatures: Miniature[]) {
    this.miniatures = miniatures;
  }
}
