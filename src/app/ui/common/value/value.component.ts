import { Component, Input } from '@angular/core';
import { Value } from '../../../data/value';

@Component({
  selector: 'value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent<T> {
  @Input() value?: Value<T>;

  constructor() {}
}
