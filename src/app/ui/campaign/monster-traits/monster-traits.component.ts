import { Component, Input } from '@angular/core';
import { Monster } from '../../../data/entities/monster';
import { Campaign } from '../../../data/things/campaign';
import { AttackType } from '../../../data/values/enums/attack_type';

@Component({
  selector: 'monster-traits',
  templateUrl: './monster-traits.component.html',
  styleUrls: ['./monster-traits.component.scss'],
})
export class MonsterTraitsComponent {
  AttackType = AttackType;

  @Input() campaign?: Campaign;
  @Input() monster!: Monster;
  @Input() overview = true;
}
