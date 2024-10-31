import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, forwardRef, input, QueryList, ViewChildren } from '@angular/core';
import { Message } from 'google-protobuf';
import { AreaContainerComponent } from '../../common/area-container/area-container.component';
import { BooleanEditorComponent } from './boolean-editor.component';
import { EditorComponent } from './editor.component';
import { EditorsComponent } from './editors.component';
import { EnumArrayEditorComponent } from './enum-array-editor.component';
import { EnumEditorComponent } from './enum-editor.component';
import { MessageArrayEditorComponent } from './message-array-editor.component';
import { NumberArrayEditorComponent } from './number-array-editor.component';
import { NumberEditorComponent } from './number-editor.component';
import { RangeArrayEditorComponent } from './range-array-editor.component';
import { RangeEditorComponent } from './range-editor.component';
import { ReferenceEditorComponent } from './reference-editor.component';
import { StringArrayEditorComponent } from './string-array-editor.component';
import { StringEditorComponent } from './string-editor.component';

@Component({
  selector: 'message-editor',
  standalone: true,
  imports: [
    AreaContainerComponent,
    StringArrayEditorComponent,
    StringEditorComponent,
    NgTemplateOutlet,
    forwardRef(() => MessageArrayEditorComponent),
    NumberEditorComponent,
    NumberArrayEditorComponent,
    BooleanEditorComponent,
    EnumEditorComponent,
    EnumArrayEditorComponent,
    RangeEditorComponent,
    RangeArrayEditorComponent,
    StringEditorComponent,
    NumberEditorComponent,
    ReferenceEditorComponent,
    forwardRef(() => EditorsComponent),
  ],
  templateUrl: './message-editor.component.html',
  styleUrl: './message-editor.component.scss',
})
export class MessageEditorComponent extends EditorComponent<Message> {
  @ViewChildren('editor') editors!: QueryList<EditorComponent<string | string[]>>;

  label = input('');
  labelOverride = input<string | undefined>();
  displayLabel = computed(() => {
    return this.labelOverride() ?? this.label();
  });

  override getValue(): Message | undefined {
    const proto = this.field().create();

    for (const editor of this.editors) {
      editor.getField().set(proto, editor.getValue());
    }

    return proto;
  }
}
