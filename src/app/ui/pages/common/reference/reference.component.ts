import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item } from '../../../../data/entities/item';
import { Monster } from '../../../../data/entities/monster';
import { Spell } from '../../../../data/entities/spell';
import { Campaign } from '../../../../data/facts/campaign';
import { DialogType, Dialogs } from '../../../common/dialogs';

@Component({
  standalone: true,
  selector: 'reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
  imports: [NgClass],
})
export class ReferenceComponent {
  @Input() name = '';
  @Input() type!: DialogType;
  @Input() color = true;
  @Input() campaign?: Campaign;
  @Input() entity?: Spell | Monster | Item;

  constructor(private readonly dialogs: Dialogs) {}

  async onClick() {
    this.dialogs.open(this.type, this.name, this.entity, this.campaign);
  }
}
