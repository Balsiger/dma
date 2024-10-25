import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AreaContainerComponent } from '../../common/area-container/area-container.component';
import { ArrayEditorComponent } from './array-editor.component';
import { EnumEditorComponent } from './enum-editor.component';

@Component({
  selector: 'enum-array-editor',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AreaContainerComponent, EnumEditorComponent],
  templateUrl: './enum-array-editor.component.html',
  styleUrl: './array-editor.component.scss',
})
export class EnumArrayEditorComponent extends ArrayEditorComponent<number> {
  constructor() {
    super();
  }

  override createEmpty(): number {
    return 0;
  }
}
