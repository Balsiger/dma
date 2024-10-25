import { Component, forwardRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Message } from 'google-protobuf';
import { AreaContainerComponent } from '../../common/area-container/area-container.component';
import { ArrayEditorComponent } from './array-editor.component';
import { MessageEditorComponent } from './message-editor.component';

@Component({
  selector: 'message-array-editor',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AreaContainerComponent, forwardRef(() => MessageEditorComponent)],
  templateUrl: './message-array-editor.component.html',
  styleUrls: ['./array-editor.component.scss', './message-array-editor.component.scss'],
})
export class MessageArrayEditorComponent extends ArrayEditorComponent<Message> {
  constructor() {
    super();
  }

  override createEmpty(): Message {
    return this.field().create()!;
  }
}
