import { Component, Input } from '@angular/core';
import { Value } from '../../../data/values/value';

@Component({
  selector: 'value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent<T> {
  @Input() value?: Value<T>;
  @Input() inline: boolean = false;

  constructor() {}
}
