import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
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
  name = input('');
  type = input.required<DialogType>();
  color = input(true);
  campaign = input<Campaign>();
  entity = input<Spell | Monster | Item>();

  constructor(private readonly dialogs: Dialogs) {}

  async onClick() {
    this.dialogs.open(this.type(), this.name(), this.entity(), this.campaign());
  }
}
