import { LowerCasePipe } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [LowerCasePipe],
})
export class ChipComponent {
  label = input('');
  type = input('');
  selected = input(false);

  constructor() {}
}
