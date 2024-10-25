import { Component, input } from '@angular/core';
import { ProtoInfoField } from '../../../proto/proto-info';

@Component({ template: '' })
export class EditorComponent<T> {
  field = input.required<ProtoInfoField>();
  value = input<T>();

  getField(): ProtoInfoField {
    return this.field();
  }

  getValue(): T | undefined {
    return this.value();
  }
}
