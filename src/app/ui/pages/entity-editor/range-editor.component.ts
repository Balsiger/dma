import { Component } from '@angular/core';
import { RangeProto } from '../../../proto/generated/value_pb';
import { EntitiesService } from '../../../services/entity/entities.service';
import { EditorInputComponent, IMPORTS } from './editor-input.component';

const PATTERN = /^\s*(\d+)\s*(?:-\s*(\d+))?$/;

@Component({
    selector: 'range-editor',
    templateUrl: './editor-input.component.html',
    styleUrl: './editor-input.component.scss',
    imports: IMPORTS
})
export class RangeEditorComponent extends EditorInputComponent<RangeProto, string> {
  constructor(entitiesService: EntitiesService) {
    super(entitiesService);

    this.hint = 'ex. 22-33 or 55';
  }

  override fromValue(proto?: RangeProto): string {
    if (!proto) {
      return '';
    }

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
