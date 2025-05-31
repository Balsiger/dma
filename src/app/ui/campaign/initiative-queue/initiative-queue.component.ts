import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, computed, input } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Campaign } from '../../../data/facts/campaign';
import { ParticipantState, ParticipantType } from '../../../data/facts/factoids/initiative-queue';
import { InitiativeParticipantComponent } from './initiative-participant.component';

@Component({
    selector: 'initiative-queue',
    imports: [CdkDropList, CdkDrag, MatIcon, MatFabButton, InitiativeParticipantComponent, MatMenuModule],
    templateUrl: './initiative-queue.component.html',
    styleUrl: './initiative-queue.component.scss'
})
export class InitiativeQueueComponent {
  ParticipantType = ParticipantType;

  campaign = input.required<Campaign>();
  participants = computed(() => this.campaign().initiatives()?.participants() || []);
  activeParticipants = computed(() => this.participants().filter((p) => p.state() === ParticipantState.active));
  readyParticipants = computed(() => this.participants().filter((p) => p.state() === ParticipantState.ready));
  waitingParticipants = computed(() => this.participants().filter((p) => p.state() === ParticipantState.waiting));
  inactiveParticipants = computed(() =>
    this.campaign()
      .characters()
      .filter((c) => !this.hasParticipant(c.name())),
  );

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.participants(), event.previousIndex, event.currentIndex);
    this.campaign().updateInitiative(this.participants());
  }

  onNext() {
    this.campaign().nextInitiative();
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
}
