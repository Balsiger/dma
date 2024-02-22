import { LowerCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  standalone: true,
  imports: [LowerCasePipe],
})
export class ChipComponent implements OnInit {
  @Input('label') label: string = '';
  @Input('type') type: string = '';
  @Input('selected') selected = false;

  constructor() {}

  ngOnInit(): void {}
}
