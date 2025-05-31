import { LowerCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss'],
    imports: [LowerCasePipe]
})
export class ChipComponent {
  label = input('');
  type = input('');
  selected = input(false);

  constructor() {}
}
