import { Component, effect, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { EditorComponent } from './editor.component';

@Component({
    selector: 'enum-editor',
    imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, MatSelectModule],
    templateUrl: './enum-editor.component.html',
    styleUrl: './enum-editor.component.scss'
})
export class EnumEditorComponent extends EditorComponent<number> {
  @ViewChild('selection') selection!: MatSelect;

  selected = 0;

  constructor() {
    super();

    effect(() => {
      this.selected = this.value() ?? this.field().fieldMetadata?.default ?? 0;
    });
  }

  override getValue(): number {
    return this.selected;
  }

  override focus() {
    this.selection.focus();
  }

  onChange(index: number) {
    this.selected = index;
    this.changed.emit();
  }
}
