import { Component, computed, forwardRef, input, QueryList, ViewChildren } from '@angular/core';
import { Message } from 'google-protobuf';
import { AreaContainerComponent } from '../../common/area-container/area-container.component';
import { EditorComponent } from './editor.component';
import { EditorsComponent } from './editors.component';

@Component({
  selector: 'message-editor',
  imports: [AreaContainerComponent, forwardRef(() => EditorsComponent)],
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
    if (proto) {
      this.update(proto);
    }
    return proto;
  }

  update(message: Message) {
    for (const editor of this.editors) {
      editor.getField().set(message, editor.getValue());
    }
  }

  override focus() {
    this.editors.first.focus();
  }
}
