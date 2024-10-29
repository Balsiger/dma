import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RangeProto } from '../../../proto/generated/value_pb';
import { AreaContainerComponent } from '../../common/area-container/area-container.component';
import { ArrayEditorComponent } from './array-editor.component';
import { RangeEditorComponent } from './range-editor.component';

@Component({
  selector: 'range-array-editor',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AreaContainerComponent, RangeEditorComponent],
  templateUrl: './range-array-editor.component.html',
  styleUrl: './array-editor.component.scss',
})
export class RangeArrayEditorComponent extends ArrayEditorComponent<RangeProto> {
  constructor() {
    super();
  }

  override createEmpty(): RangeProto {
    return new RangeProto();
  }
}
