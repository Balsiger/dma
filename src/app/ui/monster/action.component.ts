import { Component, input } from '@angular/core';
import { Action } from '../../data/entities/values/action';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';

@Component({
  selector: 'action',
  standalone: true,
  imports: [FormattedTextComponent],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
})
export class ActionComponent {
  action = input<Action>();
}
