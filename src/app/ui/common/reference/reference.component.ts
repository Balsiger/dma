import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Campaign } from '../../../data/entities/fluid/campaign';
import { Item } from '../../../data/entities/static/item';
import { Monster } from '../../../data/entities/static/monster';
import { Spell } from '../../../data/entities/static/spell';
import { Trap } from '../../../data/entities/static/trap';
import { DialogType, Dialogs } from '../../dialogs/dialogs';

@Component({
  selector: 'reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
  imports: [NgClass],
})
export class ReferenceComponent {
  // Cannot make these an input signal or the formatted-text component will break.
  @Input() name = '';
  @Input() type: DialogType = 'item';
  color = input(true);
  campaign = input<Campaign>();
  entity = input<Spell | Monster | Item | Trap>();

  constructor(private readonly dialogs: Dialogs) {}

  async onClick() {
    this.dialogs.open(this.type, this.name, this.entity(), this.campaign());
  }
}
