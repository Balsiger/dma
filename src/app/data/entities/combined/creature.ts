import { Signal } from '@angular/core';
import { NPCState } from '../fluid/npc';

export enum Type {
  npc = 'npc',
  monster = 'monster',
  character = 'character',
}

export enum HPState {
  none,
  well,
  bloodied,
  critical,
}

export interface Creature {
  name: string;
  id: string;
  uniqueName: string;
  image: string;
  type: Type;
  state: Signal<NPCState>;
  x: Signal<number>;
  y: Signal<number>;
  hp: Signal<number | undefined>;
  maxHp: Signal<number | undefined>;
  hpState: Signal<HPState>;
  hpFill: Signal<string>;
  initiativeModifier: Signal<number>;

  reset(): void;
  store(): void;
  updateHp(diff: number): void;
  setPosition(x: number, y: number): void;
  clearPosition(): void;
  setHp(hp: number): void;
}

export function computeHpState(hp?: number, maxHp?: number): HPState {
  if (!hp || !maxHp) {
    return HPState.none;
  }

  if (hp / maxHp > 0.5) {
    return HPState.well;
  }

  if (hp / maxHp > 0.25) {
    return HPState.bloodied;
  }

  return HPState.critical;
}

export function computeHpFill(hp?: number, maxHp?: number): string {
  if (hp === undefined || !maxHp) {
    return '100%';
  }

  return `${(100 * hp) / maxHp}%`;
}
