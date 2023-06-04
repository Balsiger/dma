import { Component, Input } from '@angular/core';
import { Monster } from '../../../data/entities/monster';
import { Campaign } from '../../../data/things/campaign';

@Component({
  selector: 'monster-values',
  templateUrl: './monster-values.component.html',
  styleUrls: ['./monster-values.component.scss'],
})
export class MonsterValuesComponent {
  @Input() campaign?: Campaign;
  @Input() monster!: Monster;
  @Input() overview = true;
}
