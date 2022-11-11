import { Component, Input } from '@angular/core';

@Component({
  selector: 'area-container',
  templateUrl: './area-container.component.html',
  styleUrls: ['./area-container.component.scss'],
})
export class AreaContainerComponent {
  @Input() name = '';
  @Input() height = 'auto';

  constructor() {}
}
