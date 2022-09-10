import { Component, Input } from '@angular/core';

@Component({
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
})
export class EntityComponent {
  @Input() name = '';
  @Input() references = '';
  @Input() hue = 0;
  @Input() overview = true;

  constructor() {}
}
