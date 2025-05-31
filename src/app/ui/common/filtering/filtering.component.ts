import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren, effect, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Filter, FilteringLineComponent, Selection } from '../filtering-line/filtering-line.component';

@Component({
    selector: 'filtering',
    imports: [CommonModule, FilteringLineComponent, MatButtonModule],
    templateUrl: './filtering.component.html',
    styleUrl: './filtering.component.scss'
})
export class FilteringComponent {
  filters = input<Filter[]>([]);
  values = input(new Map<string, any>());
  selected = output<Map<string, any>>();

  @ViewChildren(FilteringLineComponent) lines?: QueryList<FilteringLineComponent>;

  constructor() {
    effect(() => {
      this.update();
    });
  }

  onLineChange(selection: Selection) {
    if (selection.value) {
      this.values().set(selection.label, selection.value);
    } else {
      this.values().delete(selection.label);
    }

    this.selected.emit(this.values());
  }

  onClear() {
    this.values().clear();
    this.selected.emit(this.values());
    if (this.lines) {
      this.lines.forEach((l) => l.clear());
    }
  }

  private update() {
    for (const [key, value] of this.values()) {
      this.lineForFilter(this.filterForKey(key, this.filters()))?.set(value);
    }
  }

  private lineForFilter(filter?: Filter): FilteringLineComponent | undefined {
    if (this.lines) {
      for (const line of this.lines) {
        if (line.filter() === filter) {
          return line;
        }
      }
    }

    return undefined;
  }

  private filterForKey(key: string, filters?: Filter[]): Filter | undefined {
    if (filters) {
      for (const filter of filters) {
        if (filter.label === key) {
          return filter;
        }
      }
    }

    return undefined;
  }
}
