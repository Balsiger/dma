import { Component, input } from '@angular/core';
import { Monster } from '../../data/entities/monster';
import { Campaign } from '../../data/facts/campaign';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { ListPipe } from '../common/list.pipe';
import { ModifierPipe } from '../common/modifier.pipe';
import { TaperComponent } from '../common/taper/taper.component';
import { ValueComponent } from '../common/values/value.component';

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
