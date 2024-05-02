import { Component, input } from '@angular/core';
import { Monster } from '../../data/entities/monster';
import { Campaign } from '../../data/facts/campaign';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { TaperComponent } from '../common/taper/taper.component';
import { ListPipe } from '../pipes/list.pipe';
import { ModifierPipe } from '../pipes/modifier.pipe';
import { ValueComponent } from '../values/value.component';

@Component({
  standalone: true,
  selector: 'monster-values',
  templateUrl: './monster-values.component.html',
  styleUrls: ['./monster-values.component.scss'],
  imports: [LabeledTextComponent, ValueComponent, TaperComponent, ModifierPipe, ListPipe],
})
export class MonsterValuesComponent {
  campaign = input<Campaign>();
  monster = input.required<Monster>();
  overview = input<boolean>(true);
}
