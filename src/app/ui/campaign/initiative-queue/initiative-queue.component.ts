import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, computed, effect, input, output } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Campaign } from '../../../data/facts/campaign';
import { Participant, ParticipantState, ParticipantType } from '../../../data/facts/factoids/initiative-queue';
import { Creature } from '../../../data/local/creature';
import { InitiativeParticipantComponent } from './initiative-participant.component';

export interface Selected {
  name?: string;
  unique?: string;
}

@Component({
  selector: 'initiative-queue',
  imports: [CdkDropList, CdkDrag, MatIcon, MatFabButton, InitiativeParticipantComponent, MatMenuModule],
  templateUrl: './initiative-queue.component.html',
  styleUrl: './initiative-queue.component.scss',
})
export class InitiativeQueueComponent {
  ParticipantType = ParticipantType;

  campaign = input.required<Campaign>();
  died = input<Creature | undefined>(undefined);

  activated = output<Selected>();

  participants = computed(() => this.campaign().initiatives()?.participants() || []);
  activeParticipants = computed(() => this.participants().filter((p) => p.state() === ParticipantState.active));
  readyParticipants = computed(() => this.participants().filter((p) => p.state() === ParticipantState.ready));
  waitingParticipants = computed(() => this.participants().filter((p) => p.state() === ParticipantState.waiting));
  removedParticipants = computed(() => this.participants().filter((p) => p.state() === ParticipantState.removed));
  inactiveParticipants = computed(() =>
    this.campaign()
      .characters()
      .filter((c) => !this.hasParticipant(c.name())),
  );

  constructor() {
    effect(() => {
      for (const participant of this.participants()) {
        if (participant.uniqueName() === this.died()?.uniqueName) {
          if (participant.state() !== ParticipantState.removed) {
            participant.setState(ParticipantState.removed);
            this.campaign().updateInitiative(this.participants());
          }

          break;
        }
      }
    });
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.participants(), event.previousIndex, event.currentIndex);
    this.campaign().updateInitiative(this.participants());
  }

  async onNext() {
    await this.campaign().nextInitiative();
    if (this.participants().length > 0) {
      this.activated.emit({ name: this.participants()[0].name(), unique: this.participants()[0].uniqueName() });
    }
  }

  hasParticipant(name: string): boolean {
    for (const participant of this.participants()) {
      if (participant.name() === name) {
        return true;
      }
    }

    return false;
  }

  onAddParticipant(name: string) {
    this.campaign().addInitiativeParticipant(name);
  }

  onReaddParticipant(participant: Participant) {
    this.campaign()?.setParticipantState(participant, ParticipantState.active);
  }
}
