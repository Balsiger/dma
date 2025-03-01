import { Component, forwardRef, input } from '@angular/core';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Monster } from '../../data/entities/monster';
import { AbilityType } from '../../data/entities/values/enums/ability-type';
import { AttackType } from '../../data/entities/values/enums/attack_type';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { ReferenceComponent } from '../common/reference/reference.component';
import { DamageComponent } from '../values/damage.component';
import { ValueComponent } from '../values/value.component';

@Component({
  standalone: true,
  selector: 'monster-traits',
  templateUrl: './monster-traits.component.html',
  styleUrls: ['./monster-traits.component.scss'],
  imports: [FormattedTextComponent, ValueComponent, DamageComponent, forwardRef(() => ReferenceComponent)],
})
export class MonsterTraitsComponent {
  AttackType = AttackType;
  Version = Version;
  AbilityType = AbilityType;

  campaign = input<Campaign>();
  monster = input<Monster>();
  overview = input<boolean>(true);
  miniatures = input<MiniatureSelection[]>([]);
}
