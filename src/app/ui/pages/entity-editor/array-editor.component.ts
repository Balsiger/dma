import { Component, effect, QueryList, ViewChildren } from '@angular/core';
import { EditorComponent } from './editor-component';

@Component({ template: '' })
export abstract class ArrayEditorComponent<T> extends EditorComponent<T[]> {
  @ViewChildren('editor') inputValues!: QueryList<EditorComponent<T>>;

  allValues: T[] = [];

  constructor() {
    super();

    effect(() => {
      this.allValues = this.value() || [];
    });
  }

  override getValue(): T[] | undefined {
    return this.inputValues.map((v) => v.getValue()).filter<T>((v): v is T => v !== undefined);
  }

  onAdd() {
    this.allValues.push(this.createEmpty());
  }

  protected abstract createEmpty(): T;

  onRemove(index: number) {
    this.allValues = this.getValue() || [];
    this.allValues.splice(index, 1);
  }
}
