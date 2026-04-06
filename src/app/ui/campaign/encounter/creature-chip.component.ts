import { Component, input, model, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { NPCState } from '../../../data/facts/npc-fact';
import { Creature, CreatureType } from '../../../data/local/creature';
import { EncounterCreatureHpDialogComponent } from './encounter-creature-hp-dialog.component';

@Component({
  selector: 'creature-chip',
  imports: [MatIconModule],
  templateUrl: './creature-chip.component.html',
  styleUrl: './creature-chip.component.scss',
})
export class CreatureChipComponent {
  creature = model.required<Creature>();
  editable = input(false);
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
