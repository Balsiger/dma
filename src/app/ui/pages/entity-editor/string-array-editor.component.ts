import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AreaContainerComponent } from '../../common/area-container/area-container.component';
import { ArrayEditorComponent } from './array-editor.component';
import { StringEditorComponent } from './string-editor.component';

@Component({
  selector: 'string-array-editor',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AreaContainerComponent, StringEditorComponent],
  templateUrl: './string-array-editor.component.html',
  styleUrl: './array-editor.component.scss',
})
export class StringArrayEditorComponent extends ArrayEditorComponent<string> {
  constructor() {
    super();
  }

  override createEmpty(): string {
    return '';
  }
}
