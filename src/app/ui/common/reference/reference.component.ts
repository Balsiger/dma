import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Item } from '../../../data/entities/item';
import { Monster } from '../../../data/entities/monster';
import { Spell } from '../../../data/entities/spell';
import { Campaign } from '../../../data/facts/campaign';
import { DialogType, Dialogs } from '../../dialogs/dialogs';

@Component({
  standalone: true,
  selector: 'reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
  imports: [NgClass],
})
export class ReferenceComponent {
  // Cannot make these an input signal or the formatted-text component will break.
  @Input() name = '';
  @Input() type: DialogType = 'item';
  @Input() campaign: Campaign | undefined;
  color = input(true);
  entity = input<Spell | Monster | Item>();

  constructor(private readonly dialogs: Dialogs) {}

  async onClick() {
    console.log('~~campaign', this.campaign);
    this.dialogs.open(this.type, this.name, this.entity(), this.campaign);
  }
}
