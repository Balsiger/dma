import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Monster } from '../../../../data/entities/monster';
import { Spell } from '../../../../data/spell';
import { Campaign } from '../../../../data/things/campaign';
import { Item } from '../../../../data/things/item';
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
