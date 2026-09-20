import { computed, signal } from '@angular/core';
import { Campaign } from '../campaign';
import { Factoid } from './factoid';

export enum ParticipantType {
  character,
  round,
  npc,
  monster,
}

export enum ParticipantState {
  active,
  ready,
  waiting,
  removed,
}

export interface ParticipantData {
  name?: string;
  uniqueName?: string;
  number?: number;
  type?: ParticipantType;
  state?: ParticipantState;
  conditions?: string[];
  concentration?: boolean;
  dead?: boolean;
}

export interface Data {
  participants?: ParticipantData[];
}

export class Participant implements Factoid<ParticipantData> {
  name = signal('');
  uniqueName = signal('');
  number = signal(0);
  type = ParticipantType.character;
  state = signal(ParticipantState.active);
  conditions = signal<string[]>([]);
  concentration = signal(false);

  character = computed(() => this.campaign.characters().find((c) => c.name() === this.name()));
  portrait = computed(() => this.determinePortrait());

  constructor(
    private readonly campaign: Campaign,
    data: ParticipantData,
  ) {
    this.update(data);
  }

  toData(): ParticipantData {
    return {
      name: this.name(),
      uniqueName: this.uniqueName(),
      number: this.number(),
      type: this.type,
      state: this.state(),
      conditions: this.conditions(),
    };
  }

  update(data: ParticipantData) {
    this.name.set(data.name || '');
    if (data.name === 'Monsters') {
      this.type = ParticipantType.monster;
    } else {
      this.type = data.type || ParticipantType.character;
    }
    this.uniqueName.set(data.uniqueName || '');
    this.number.set(data.number ?? 0);
    this.state.set(data.state || ParticipantState.active);
    this.conditions.set(data.conditions || ['Camouflaged']);
    this.concentration.set(data.concentration || false);
  }

  setState(state: ParticipantState) {
    this.state.set(state);
  }

  addCondition(condition: string) {
    this.conditions.update((c) => {
      c.push(condition);
      return c;
    });
  }

  removeCondition(condition: string) {
    this.conditions.update((c) => c.filter((i) => i !== condition));
  }

  toggleCondition(condition: string) {
    if (this.hasCondition(condition)) {
      this.removeCondition(condition);
    } else {
      this.addCondition(condition);
    }
  }

  toggleConcentration() {
    this.concentration.update((c) => !c);
  }

  hasCondition(condition: string): boolean {
    return this.conditions().includes(condition);
  }

  private determinePortrait(): string {
    switch (this.type) {
      case ParticipantType.character:
        return this.character()?.profile()?.url ?? '';

      case ParticipantType.npc:
        return this.campaign.npcs().find((n) => n.name === this.name())?.portrait?.url ?? '';

      case ParticipantType.monster:
        if (this.conditions().findIndex((c) => c === 'Camouflaged') >= 0) {
          return '/assets/library/monsters.png';
        }

        return this.campaign.getMonster(this.name())?.portrait?.url ?? '/assets/library/monsters.png';
    }

    return '';
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
