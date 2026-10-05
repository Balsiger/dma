import { computed, signal } from '@angular/core';
import { Context } from '../../../services/context';
import { computeHpFill, computeHpState, CreatureState } from '../combined/creature';
import { Local, LocalData } from './local';

export interface MonsterData extends LocalData {
  x?: number;
  y?: number;
  hp?: number;
  maxHp?: number;
  initiativeModifier?: number;
}

export class LocalMonster extends Local<LocalMonster, MonsterData> {
  x = signal(0);
  y = signal(0);
  hp = signal(0);
  maxHp = signal(0);
  state = signal(CreatureState.alive);
  hpState = computed(() => computeHpState(this.hp(), this.maxHp()));
  hpFill = computed(() => computeHpFill(this.hp(), this.maxHp()));
  iniativeModifier = signal(0);

  constructor(name: string, id: string, context: Context) {
    super(context.extendTerminal('monster'), name, id);
  }

  setPosition(x: number, y: number) {
    this.x.set(x);
    this.y.set(y);
    this.store();
  }

  clearPosition() {
    this.setPosition(0, 0);
  }

  setHp(hp: number) {
    this.hp.set(hp);
    this.state.set(hp <= 0 ? CreatureState.dead : CreatureState.alive);
    this.store();
  }

  updateHp(diff: number) {
    this.setHp((this.hp() ?? 0) + diff);
    this.store();
  }

  maybeInit(maxHp: number, initiativeModifier: number) {
    if (this.maxHp() == 0) {
      this.maxHp.set(maxHp);
      this.hp.set(maxHp);
      this.state.set(CreatureState.alive);
      this.iniativeModifier.set(initiativeModifier);
      this.store();
    }
  }

  override localUpdate(data: MonsterData): void {
    if (this.name === data.name) {
      this.x.set(data.x ?? 0);
      this.y.set(data.y ?? 0);
      this.hp.set(data.hp ?? 0);
      this.maxHp.set(data.maxHp ?? 0);
      this.iniativeModifier.set(data.initiativeModifier ?? 0);

      if (data.hp) {
        this.state.set(data.hp <= 0 ? CreatureState.dead : CreatureState.alive);
      } else {
        this.state.set(CreatureState.unknown);
      }
    } else {
      console.warn('Cannot update monster with a different name', this.name, 'vs', data.name);
    }
  }

  protected override toLocalData(): MonsterData {
    return {
      ...this.toBaseData(),
      x: this.x(),
      y: this.y(),
      hp: this.hp(),
      maxHp: this.maxHp(),
      initiativeModifier: this.iniativeModifier(),
    };
  }
}
