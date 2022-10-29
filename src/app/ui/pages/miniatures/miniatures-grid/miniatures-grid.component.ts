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
import { FilterData } from '../../../../data/FilterData';
import { Miniature } from '../../../../data/miniature';
import { MiniaturesService } from '../../../../services/miniatures.service';

let MINIATURE_WIDTH = 160;
let MINIATURE_HEIGHT = 200;
let PAGINATION_HEIGHT = 40;
const MINIATURE_MIN = 4;

@Component({
  selector: 'miniatures-grid',
  templateUrl: './miniatures-grid.component.html',
  styleUrls: ['./miniatures-grid.component.scss'],
  host: { '(window:resize)': 'onResized()' },
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
