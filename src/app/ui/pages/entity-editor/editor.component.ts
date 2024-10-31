import { Component, input } from '@angular/core';
import { ProtoInfoField } from '../../../proto/proto-info';
import { ProtoInfoFieldType } from '../../../proto/proto-info-field-type';

@Component({ template: '' })
export class EditorComponent<T> {
  ProtoInfoFieldType = ProtoInfoFieldType;

  field = input.required<ProtoInfoField>();
  value = input<T>();
  entityType = input('');
  hint = '';

  getField(): ProtoInfoField {
    return this.field();
  }

  getValue(): T | undefined {
    return this.value();
  }
}
