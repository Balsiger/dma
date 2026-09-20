import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Monster } from '../../data/entities/static/monster';
import { AbilityType } from '../../data/entities/static/values/enums/ability-type';
import { Version } from '../../data/entities/static/values/enums/version';
import { Versioning } from '../../rules/versions';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { ReferenceComponent } from '../common/reference/reference.component';
import { TaperComponent } from '../common/taper/taper.component';
import { ListPipe } from '../pipes/list.pipe';
import { ModifierPipe } from '../pipes/modifier.pipe';
import { ValueComponent } from '../values/value.component';

@Component({
  selector: 'monster-values',
  templateUrl: './monster-values.component.html',
  styleUrls: ['./monster-values.component.scss'],
  imports: [
    CommonModule,
    LabeledTextComponent,
    ValueComponent,
    TaperComponent,
    ModifierPipe,
    ListPipe,
    ModifierPipe,
    forwardRef(() => ReferenceComponent),
  ],
})
export class MonsterValuesComponent {
  Versioning = Versioning;
  Version = Version;
  AbilityType = AbilityType;

  campaign = input<Campaign>();
  monster = input.required<Monster>();
  overview = input<boolean>(true);
}
