import { Component, computed, input, model, output, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { Creature, CreatureState, Type as CreatureType } from '../../../data/entities/combined/creature';
import { Settings } from '../../../data/values/settings';
import { EncounterCreatureHpDialogComponent } from './encounter-creature-hp-dialog.component';

@Component({
  selector: 'creature-chip',
  imports: [MatIconModule],
  templateUrl: './creature-chip.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './creature-chip.component.scss',
})
export class CreatureChipComponent {
  creature = model.required<Creature>();
  editable = input(false);
  selected = input(false);

  hpDiff = output<number>();
  died = output<Creature>();

  NPCState = CreatureState;
  CreatureType = CreatureType;

  hpFactor = computed(() => (this.settings.houseRules().doubleHp ? 2 : 1));

  constructor(
    private readonly dialog: MatDialog,
    private readonly settings: Settings,
  ) {}

  async onContextMenu(event: Event) {
    if (this.creature().type === CreatureType.character) {
      return;
    }

    event.preventDefault();

    const dialog = this.dialog.open(EncounterCreatureHpDialogComponent, {
      data: {
        creature: this.creature(),
        hpFactor: this.hpFactor(),
      },
    });

    const diff = await firstValueFrom(dialog.afterClosed());
    if (diff) {
      const creature = this.creature();
      if (creature.type === CreatureType.monster) {
        creature.updateHp(diff / this.hpFactor());
        creature.store();
      } else {
        this.hpDiff.emit(diff / this.hpFactor());
      }

      if (creature.state() === CreatureState.dead) {
        this.died.emit(creature);
      }
    }
  }
}
