import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { Filter, FilteringLineComponent, Selection } from '../filtering-line/filtering-line.component';

export interface FilterSelection {
  filter: Filter;
  value: string|Filter|Filter[];
}

@Component({
  selector: 'filtering',
  standalone: true,
  imports: [CommonModule, FilteringLineComponent],
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.scss'
})
export class FilteringComponent {
  @Input() filters?: Filter[];
  @Output() selected = new EventEmitter<Map<string, any>>();

  @ViewChildren(FilteringLineComponent) lines?: QueryList<FilteringLineComponent>;

  private selectedFilters = new Map<string, any>();
  
  onLineChange(selection: Selection) {
    if (selection.value) {
      this.selectedFilters.set(selection.label, selection.value); 
    } else {
      this.selectedFilters.delete(selection.label);
    }

    this.selected.emit(this.selectedFilters);
  }

  onClear() {
    this.selectedFilters.clear();
    this.selected.emit(this.selectedFilters);
    if (this.lines) {
      this.lines.forEach(l => l.clear());
    }
  }
}
