import { Component, input } from '@angular/core';

@Component({
  selector: 'area-container',
  templateUrl: './area-container.component.html',
  styleUrls: ['./area-container.component.scss'],
  standalone: true,
})
export class AreaContainerComponent {
  name = input('');
  height = input('auto');

  constructor() {}
}
