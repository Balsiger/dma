import { computed, signal } from '@angular/core';
import { Campaign } from '../campaign';
import { Factoid } from './factoid';

export enum ParticipantType {
  character,
  round,
  monster,
}

export enum ParticipantState {
  active,
  ready,
  waiting,
}

export interface ParticipantData {
  name?: string;
  type?: ParticipantType;
  state?: ParticipantState;
}

export interface Data {
  participants?: ParticipantData[];
}

export class Participant implements Factoid<ParticipantData> {
  name = signal('');
  type = ParticipantType.character;
  state = signal(ParticipantState.active);
  character = computed(() => this.campaign.characters().find((c) => c.name() === this.name()));

  constructor(
    private readonly campaign: Campaign,
    data: ParticipantData,
  ) {
    this.update(data);
  }

  toData(): ParticipantData {
    return {
      name: this.name(),
      type: this.type,
      state: this.state(),
    };
  }

  update(data: ParticipantData) {
    this.name.set(data.name || '');
    if (data.name === 'Monsters') {
      this.type = ParticipantType.monster;
    } else {
      this.type = data.type || ParticipantType.character;
    }
    this.state.set(data.state || ParticipantState.active);
  }

  setState(state: ParticipantState) {
    this.state.set(state);
  }

  static fromData(campaign: Campaign, data: ParticipantData): Participant {
    return new Participant(campaign, data);
  }
}

export class InitiativeQueue implements Factoid<Data> {
  participants = signal<Participant[]>([]);

  constructor(
    private readonly campaign: Campaign,
    data: Data,
  ) {
    this.update(data);
  }

  next(): boolean {
    if (this.participants().length === 0) {
      return false;
    }

    const participants = this.participants();
    participants.push(participants.shift()!);

    if (participants[0].type === ParticipantType.round) {
      participants.push(participants.shift()!);
      return true;
    }

    return false;
  }

  setActive(participant: Participant, before: boolean) {
    const participants = this.participants().filter((p) => p !== participant);
    participants.splice(before ? 0 : 1, 0, participant);
    this.participants.set(participants);
  }

  toData(): Data {
    return {
      participants: this.participants().map((p) => p.toData()),
    };
  }

  update(data: Data) {
    this.participants.set(data.participants?.map((p) => Participant.fromData(this.campaign, p)) || []);
  }

  static fromData(campaign: Campaign, data: Data): InitiativeQueue {
    return new InitiativeQueue(campaign, data);
  }

  static isEqual(a: InitiativeQueue | undefined, b: InitiativeQueue | undefined): boolean {
    return a?.participants === b?.participants;
  }
}
