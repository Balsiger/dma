import { Component, model, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { NPCState } from '../../../data/facts/npc-fact';
import { Creature } from '../../../data/local/creature';
import { EncounterCreatureHpDialogComponent } from './encounter-creature-hp-dialog.component';
import { CreatureType } from './encounter-monster-canvas.component';

@Component({
  selector: 'encounter-monster-chip',
  imports: [MatIconModule],
  templateUrl: './encounter-monster-chip.component.html',
  styleUrl: './encounter-monster-chip.component.scss',
})
export class EncounterMonsterChipComponent {
  creature = model.required<Creature>();
  hpDiff = output<number>();

  NPCState = NPCState;
  CreatureType = CreatureType;

  constructor(private readonly dialog: MatDialog) {}

  async onContextMenu(event: Event) {
    if (this.creature().type === CreatureType.character) {
      return;
    }

    event.preventDefault();

    const dialog = this.dialog.open(EncounterCreatureHpDialogComponent, {
      data: this.creature(),
    });

    const diff = await firstValueFrom(dialog.afterClosed());
    if (diff) {
      const creature = this.creature();
      if (creature.type === CreatureType.monster) {
        creature.updateHp(diff);
      } else {
        this.hpDiff.emit(diff);
      }
    }
  }
}
