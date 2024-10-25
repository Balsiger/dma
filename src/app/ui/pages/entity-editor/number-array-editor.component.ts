import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AreaContainerComponent } from '../../common/area-container/area-container.component';
import { ArrayEditorComponent } from './array-editor.component';
import { NumberEditorComponent } from './number-editor.component';

@Component({
  selector: 'number-array-editor',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AreaContainerComponent, NumberEditorComponent],
  templateUrl: './number-array-editor.component.html',
  styleUrl: './array-editor.component.scss',
})
export class NumberArrayEditorComponent extends ArrayEditorComponent<number> {
  constructor() {
    super();
  }

  override createEmpty(): number {
    return 0;
  }
}
