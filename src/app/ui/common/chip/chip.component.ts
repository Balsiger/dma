import { Component, Input, OnInit } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
    selector: 'chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss'],
    standalone: true,
    imports: [LowerCasePipe]
})
export class ChipComponent implements OnInit {

  @Input('label') label: string = '';
  @Input('type') type: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
