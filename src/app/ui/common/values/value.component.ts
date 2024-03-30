import { Component, Input } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Value } from '../../../data/entities/values/value';
import { ModifierPipe } from '../modifier.pipe';

@Component({
  standalone: true,
  selector: 'value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
  imports: [NgbPopover, ModifierPipe],
})
export class ValueComponent<T> {
  @Input() value?: Value<T>;
  @Input() inline: boolean = false;

  constructor() {}
}
