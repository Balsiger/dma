import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Monster } from '../../data/entities/monster';
import { AbilityType } from '../../data/entities/values/enums/ability-type';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
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
    ReferenceComponent,
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
