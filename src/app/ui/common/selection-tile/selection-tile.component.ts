import { Component, Input } from '@angular/core';

@Component({
  selector: 'selection-tile',
  templateUrl: './selection-tile.component.html',
  styleUrls: ['./selection-tile.component.scss']
})
export class SelectionTileComponent {

  @Input() title = '';
  @Input() image = '';
  @Input() target = '';
  @Input() type = '';

  constructor() { }
}
