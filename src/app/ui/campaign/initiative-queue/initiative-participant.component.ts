import { Component, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Campaign } from '../../../data/facts/campaign';
import {
  InitiativeQueue,
  Participant,
  ParticipantState,
  ParticipantType,
} from '../../../data/facts/factoids/initiative-queue';

@Component({
    selector: 'initiative-participant',
    imports: [MatButtonModule, MatMenuModule],
    templateUrl: './initiative-participant.component.html',
    styleUrl: './initiative-participant.component.scss'
})
export class InitiativeParticipantComponent {
  ParticipantType = ParticipantType;

  campaign = input<Campaign>();
  queue = input<InitiativeQueue>();
  participant = input.required<Participant>();
  orientation = input<'vertical' | 'horizontal'>('horizontal');
  active = input(true);

  isMonster = computed(() => this.participant().type === ParticipantType.monster);
  isRound = computed(() => this.participant().type === ParticipantType.round);

  onReady() {
    this.campaign()?.setParticipantState(this.participant(), ParticipantState.ready);
  }

  onWaiting() {
    this.campaign()?.setParticipantState(this.participant(), ParticipantState.waiting);
  }

  onClick() {
    if (this.queue() && this.participant().state() !== ParticipantState.active) {
      this.campaign()?.setParticipantState(
        this.participant(),
        ParticipantState.active,
        this.participant().state() === ParticipantState.ready,
      );
    }
  }
}
