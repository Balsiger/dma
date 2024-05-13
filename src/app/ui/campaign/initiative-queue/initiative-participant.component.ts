import { Component, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {
  InitiativeQueue,
  Participant,
  ParticipantState,
  ParticipantType,
} from '../../../data/facts/factoids/initiative-queue';

@Component({
  selector: 'initiative-participant',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './initiative-participant.component.html',
  styleUrl: './initiative-participant.component.scss',
})
export class InitiativeParticipantComponent {
  ParticipantType = ParticipantType;

  queue = input<InitiativeQueue>();
  participant = input.required<Participant>();
  orientation = input<'vertical' | 'horizontal'>('horizontal');
  active = input(true);

  isMonster = computed(() => this.participant().type === ParticipantType.monster);
  isRound = computed(() => this.participant().type === ParticipantType.round);

  onReady() {
    this.participant().setReady();
  }

  onWaiting() {
    this.participant().setWaiting();
  }

  onClick() {
    if (this.queue() && this.participant().state() !== ParticipantState.active) {
      this.queue()?.setActive(this.participant(), this.participant().state() === ParticipantState.ready);
    }
  }
}
