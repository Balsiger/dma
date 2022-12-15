import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Monster } from '../../../../data/entities/monster';
import { Spell } from '../../../../data/spell';
import { Campaign } from '../../../../data/things/campaign';
import { Item } from '../../../../data/things/item';
import { ItemService } from '../../../../services/item.service';
import { MonsterService } from '../../../../services/monster.service';
import { SpellService } from '../../../../services/spell.service';
import { ItemDialogComponent } from '../../campaign/item-dialog/item-dialog.component';
import { MonsterDialogComponent } from '../../campaign/monster-dialog/monster-dialog.component';
import { SpellDialogComponent } from '../../campaign/spell-dialog/spell-dialog.component';

@Component({
  selector: 'reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
  @Input() name = '';
  @Input() type!: 'spell' | 'monster' | 'item';
  @Input() color = true;
  @Input() campaign?: Campaign;
  @Input() entity?: Spell | Monster | Item;

  constructor(
    private readonly dialog: MatDialog,
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService,
    private readonly itemService: ItemService
  ) {}

  async onClick() {
    switch (this.type) {
      case 'spell':
        const spell = this.entity || (await this.spellService.get(this.name));
        this.dialog.open(SpellDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: spell });
        break;

      case 'monster':
        const monster = this.entity || (await this.monsterService.get(this.name));
        this.dialog.open(MonsterDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { monster: monster, campaign: this.campaign },
        });
        break;

      case 'item':
        const item = this.entity || (await this.itemService.get(this.name));
        this.dialog.open(ItemDialogComponent, {
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: { item: item, campaign: this.campaign },
        });
        break;
    }
  }
}
