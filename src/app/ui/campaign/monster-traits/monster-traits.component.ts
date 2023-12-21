import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { Monster } from '../../../data/entities/monster';
import { Campaign } from '../../../data/things/campaign';
import { AttackType } from '../../../data/values/enums/attack_type';
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
import { TaperComponent } from '../../common/taper/taper.component';
import { TextPipe } from '../../common/text.pipe';
import { DamageComponent } from '../../common/values/damage.component';
import { ValueComponent } from '../../common/values/value.component';
import { ReferenceComponent } from '../../pages/common/reference/reference.component';

@Component({
  standalone: true,
  selector: 'monster-traits',
  templateUrl: './monster-traits.component.html',
  styleUrls: ['./monster-traits.component.scss'],
  imports: [
    TaperComponent,
    TextPipe,
    FormattedTextComponent,
    ValueComponent,
    NgSwitch,
    DamageComponent,
    forwardRef(() => ReferenceComponent),
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgFor,
    NgSwitchDefault,
  ],
})
export class MonsterTraitsComponent {
  AttackType = AttackType;

  @Input() campaign?: Campaign;
  @Input() monster!: Monster;
  @Input() overview = true;
}
