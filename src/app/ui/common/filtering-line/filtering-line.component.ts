import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

export interface FilterOption {
  label: string,
  value?: any,
}

export interface Filter {
  label: string;
  options?: FilterOption[];
  multiple?: boolean;
}

export interface Selection {
  label: string; 
  value: any;
}

@Component({
  selector: 'filtering-line',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './filtering-line.component.html',
  styleUrl: './filtering-line.component.scss'
})
export class FilteringLineComponent {
  @Input() filter?: Filter;
  @Output() change = new EventEmitter<Selection>();

  onChange(selection: Selection|Selection[]) {
    if (Array.isArray(selection)) {
      if (selection.length > 0) {
        this.change.emit({label: selection[0].label, value: selection.map(s => s.value)});
      }
    } else {
      this.change.emit(selection);  
    }
  }
}
