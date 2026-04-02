import { Component, input } from '@angular/core';

@Component({
  selector: 'xp-award',
  imports: [],
  templateUrl: './xp-award.component.html',
  styleUrl: './xp-award.component.scss',
})
export class XpAwardComponent {
  xp = input(0);

  constructor() {}
}
