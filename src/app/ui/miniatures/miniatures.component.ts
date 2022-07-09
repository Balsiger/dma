import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Miniature } from '../../data/miniature';
import { MiniaturesService } from '../../data/miniatures.service';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';

const MINIATURE_WIDTH = 150;
const MINIATURE_HEIGHT = 200;
const MINIATURE_MIN = 4;

@Component({
  selector: 'miniatures',
  templateUrl: './miniatures.component.html',
  styleUrls: ['./miniatures.component.scss'],
  host: { '(window:resize)': 'onResized()' }
})
export class MiniaturesComponent implements OnInit, AfterViewInit {
  
  @ViewChild('list') container? : ElementRef;

  miniatures: Miniature[] = [];
  max = 10;
  start = 0;
  filterDialog?: MatDialogRef<FilterDialogComponent>;

  constructor(private readonly miniatureService: MiniaturesService, 
    private readonly element: ElementRef,
    private readonly route: ActivatedRoute, private readonly router: Router, private readonly dialog: MatDialog) { 
      this.route.queryParamMap.subscribe((params) => {
        this.start = Math.max(0, Number(params.get('start')));
      });
  }

  ngOnInit(): void {
    this.miniatureService.getMiniatures().then((miniatures) => this.update(miniatures));
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
      relativeTo: this.route, queryParams: { start: Math.max(0, start) }, queryParamsHandling: 'merge'
    });
  }

  onOpenFilter() {
    if (this.filterDialog) {
      this.filterDialog.close();
      this.filterDialog = undefined;
    } else {
      this.filterDialog = this.dialog.open(FilterDialogComponent, {
        hasBackdrop: false,
        position: {
          top: '130px',
          left: '40px',
        }
      });
    }
  }

  private update(miniatures: Miniature[]) {
    this.miniatures = miniatures;
  }
}
