import { Component } from '@angular/core';
import { ReferenceProto } from '../../../proto/generated/value_pb';
import { EditorComponent } from './editor.component';

@Component({
  selector: 'reference-editor',
  standalone: true,
  imports: [],
  templateUrl: './reference-editor.component.html',
  styleUrl: './reference-editor.component.scss',
})
export class ReferenceEditorComponent extends EditorComponent<ReferenceProto> {}
