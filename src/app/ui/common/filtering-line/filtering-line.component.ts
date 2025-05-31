import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, input, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';

export interface FilterOption {
  label: string;
  value?: any;
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
    imports: [CommonModule, MatFormFieldModule, MatSelectModule],
    templateUrl: './filtering-line.component.html',
    styleUrl: './filtering-line.component.scss'
})
export class FilteringLineComponent {
  filter = input<Filter>();
  change = output<Selection>();

  @ViewChild('input') input?: ElementRef<HTMLInputElement>;
  @ViewChild('select') select?: MatSelect;

  onChange(selection: Selection | Selection[]) {
    if (Array.isArray(selection)) {
      if (selection.length > 0) {
        this.change.emit({ label: selection[0].label, value: selection.map((s) => s.value) });
      } else {
        if (this.filter) {
          this.change.emit({ label: this.filter()!.label, value: undefined });
        }
      }
    } else {
      this.change.emit(selection);
    }
  }

  clear() {
    if (this.input) {
      this.input.nativeElement.value = '';
    }
    if (this.select) {
      this.select.options.forEach((o) => o.deselect());
    }
  }

  set(value: any) {
    if (this.input) {
      this.input.nativeElement.value = value;
    }
    if (this.select) {
      this.select.options.forEach((o) => {
        o.value.value === value || (Array.isArray(value) && value.includes(o.value.value)) ? o.select() : o.deselect();
      });
    }
  }
}
