import { Component, input } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Value } from '../../data/entities/values/value';
import { ModifierPipe } from '../pipes/modifier.pipe';

@Component({
    selector: 'value',
    templateUrl: './value.component.html',
    styleUrls: ['./value.component.scss'],
    imports: [NgbPopover, ModifierPipe]
})
export class ValueComponent<T> {
  value = input<Value<T>>();
  inline = input(false);
}
