import { Component, Input } from '@angular/core';
import { Campaign } from '../../../../data/things/campaign';

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
  @Input() baseType: 'monster' | 'item' | 'spell' = 'item';
  @Input() bases: string[] = [];
  @Input() campaign?: Campaign;

  constructor() {}
}
