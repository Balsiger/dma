import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RangeProto } from '../../../proto/generated/value_pb';
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
import { EditorInputComponent } from './editor-input.component';

const PATTERN = /^\s*(\d+)\s*(?:-\s*(\d+))?$/;

@Component({
  selector: 'range-editor',
  standalone: true,
  templateUrl: './editor-input.component.html',
  styleUrl: './editor-input.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    FormattedTextComponent,
    MatIconModule,
    MatButtonModule,
    FormattedTextComponent,
  ],
})
export class RangeEditorComponent extends EditorInputComponent<RangeProto, string> {
  constructor() {
    super();

    this.hint = 'ex. 22-33 or 55';
  }

  override fromValue(proto?: RangeProto): string {
    if (!proto) {
      return '';
    }

    console.log('~~from value', proto);
    if (proto.getLow() === proto.getHigh()) {
      return '' + proto.getLow();
    }

    return proto.getLow() + ' - ' + proto.getHigh();
  }

  override toValue(text: string): RangeProto {
    const result = new RangeProto();

    const match = text.match(PATTERN);
    if (match) {
      result.setLow(Number(match[1]));
      result.setHigh(Number(match[2] || match[1]));
    }

    return result;
  }
}
