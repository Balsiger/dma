import { Component, inject, input, output } from '@angular/core';
import { ProtoInfoField } from '../../../proto/proto-info';
import { ProtoInfoFieldType } from '../../../proto/proto-info-field-type';
import { EditorContext } from './entity-editor.component';

@Component({
  template: '',
  standalone: false,
})
export class EditorComponent<T> {
  ProtoInfoFieldType = ProtoInfoFieldType;

  field = input.required<ProtoInfoField>();
  value = input<T>();
  entityType = input.required<string>();
  autocompleteType = input('');
  hint = '';
  changed = output<void>();

  protected context = inject(EditorContext);

  getField(): ProtoInfoField {
    return this.field();
  }

  getValue(): T | undefined {
    return this.value();
  }

  focus() {}
}
