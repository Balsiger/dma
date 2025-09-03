import { Component, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { GlossaryType } from '../../../data/entities/values/enums/glossary_type';
import { Campaign } from '../../../data/facts/campaign';
import {
  InitiativeQueue,
  Participant,
  ParticipantState,
  ParticipantType,
} from '../../../data/facts/factoids/initiative-queue';
import { EntitiesService } from '../../../services/entity/entities.service';

@Component({
  selector: 'initiative-participant',
  imports: [MatButtonModule, MatMenuModule, MatCheckbox],
  templateUrl: './initiative-participant.component.html',
  styleUrl: './initiative-participant.component.scss',
})
export class InitiativeParticipantComponent {
  ParticipantType = ParticipantType;

  campaign = input<Campaign>();
  queue = input<InitiativeQueue>();
  participant = input.required<Participant>();
  orientation = input<'vertical' | 'horizontal'>('horizontal');
  active = input(true);
  conditions: string[];

  isMonster = computed(() => this.participant().type === ParticipantType.monster);
  isRound = computed(() => this.participant().type === ParticipantType.round);

  constructor(entities: EntitiesService) {
    this.conditions = entities.glossary
      .getAll()
      .filter((g) => g.type === GlossaryType.CONDITION)
      .map((g) => g.name);
  }

  onReady() {
    this.campaign()?.setParticipantState(this.participant(), ParticipantState.ready);
  }

  onWaiting() {
    this.campaign()?.setParticipantState(this.participant(), ParticipantState.waiting);
  }

  onCondition(condition: string) {
    this.participant().toggleCondition(condition);
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
