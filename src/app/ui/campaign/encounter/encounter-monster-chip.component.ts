import { Component, model, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { NPCState } from '../../../data/facts/npc-fact';
import { EncounterCreatureHpDialogComponent } from './encounter-creature-hp-dialog.component';
import { Creature } from './encounter-monster-canvas.component';

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

  constructor(private readonly dialog: MatDialog) {}

  async onContextMenu(event: Event) {
    event.preventDefault();

    const dialog = this.dialog.open(EncounterCreatureHpDialogComponent, {
      data: this.creature(),
    });

    const diff = await firstValueFrom(dialog.afterClosed());
    if (diff) {
      if (this.creature().local) {
        const hp = (this.creature().hp ?? 0) + diff;
        const state = hp <= 0 ? NPCState.dead : NPCState.alive;

        this.creature.update((c) => new Creature(c.name, c.image, state, hp, c.maxHp, c.local));
      } else {
        this.hpDiff.emit(diff);
      }
    }
  }
}
