import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Monster } from '../../../data/entities/monster';
import { Campaign } from '../../../data/things/campaign';
import { LabeledTextComponent } from '../../common/labeled-text/labeled-text.component';
import { ModifierPipe } from '../../common/modifier.pipe';
import { TaperComponent } from '../../common/taper/taper.component';
import { ValueComponent } from '../../common/values/value.component';

@Component({
  standalone: true,
  selector: 'monster-values',
  templateUrl: './monster-values.component.html',
  styleUrls: ['./monster-values.component.scss'],
  imports: [LabeledTextComponent, ValueComponent, TaperComponent, ModifierPipe, NgIf, NgFor],
})
export class MonsterValuesComponent {
  @Input() campaign?: Campaign;
  @Input() monster!: Monster;
  @Input() overview = true;
}
