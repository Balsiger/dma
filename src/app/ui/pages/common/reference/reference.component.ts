import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MonsterService } from '../../../../services/monster.service';
import { SpellService } from '../../../../services/spell.service';
import { MonsterDialogComponent } from '../../campaign/monster-dialog/monster-dialog.component';
import { SpellDialogComponent } from '../../campaign/spell-dialog/spell-dialog.component';

@Component({
  selector: 'reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
  @Input() name = '';
  @Input() type!: 'spell' | 'monster';

  constructor(
    private readonly dialog: MatDialog,
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService
  ) {}

  async onClick() {
    switch (this.type) {
      case 'spell':
        const spell = await this.spellService.getSpell(this.name);
        this.dialog.open(SpellDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: spell });
        break;

      case 'monster':
        const monster = await this.monsterService.getMonster(this.name);
        this.dialog.open(MonsterDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: monster });
        break;
    }
  }
}
