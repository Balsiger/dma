import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() change = new EventEmitter<Map<string, any>>();

  private selectedFilters = new Map<string, any>();
  
  onLineChange(selection: Selection) {
    this.selectedFilters.set(selection.label, selection.value);
    this.change.emit(this.selectedFilters);
  }
}
