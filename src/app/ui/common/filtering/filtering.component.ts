import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Filter, FilteringLineComponent, Selection } from '../filtering-line/filtering-line.component';

@Component({
  selector: 'filtering',
  standalone: true,
  imports: [CommonModule, FilteringLineComponent, MatButtonModule],
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.scss',
})
export class FilteringComponent implements OnChanges, AfterViewInit {
  @Input() filters?: Filter[];
  @Input() values = new Map<string, any>();
  @Output() selected = new EventEmitter<Map<string, any>>();

  @ViewChildren(FilteringLineComponent) lines?: QueryList<FilteringLineComponent>;

  ngAfterViewInit(): void {
    this.update(this.values, this.filters);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Need to update for any filters or values changes.
    this.update(
      changes['values'] ? changes['values'].currentValue : this.values,
      changes['filters'] ? changes['filters'].currentValue : this.filters,
    );
  }

  onLineChange(selection: Selection) {
    if (selection.value) {
      this.values.set(selection.label, selection.value);
    } else {
      this.values.delete(selection.label);
    }

    this.selected.emit(this.values);
  }

  onClear() {
    this.values.clear();
    this.selected.emit(this.values);
    if (this.lines) {
      this.lines.forEach((l) => l.clear());
    }
  }

  private update(values: Map<string, any>, filters?: Filter[]) {
    for (const [key, value] of values) {
      this.lineForFilter(this.filterForKey(key, filters))?.set(value);
    }
  }

  private lineForFilter(filter?: Filter): FilteringLineComponent | undefined {
    if (this.lines) {
      for (const line of this.lines) {
        if (line.filter === filter) {
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
