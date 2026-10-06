import { signal } from '@angular/core';
import { Context } from '../../../services/context';
import { Local, LocalData } from './local';

export interface NPCData extends LocalData {
  x?: number;
  y?: number;
}

export class LocalNPC extends Local<LocalNPC, NPCData> {
  x = signal(0);
  y = signal(0);

  constructor(name: string, context: Context) {
    super(context.extend('npc'), name, '');

    // Cannot do in base because it needs the class to be constructed to call derived methods.
    this.restore();
  }

  setPosition(x: number, y: number) {
    this.x.set(x);
    this.y.set(y);
    this.store();
  }

  clearPosition() {
    this.setPosition(0, 0);
  }

  override localUpdate(data: NPCData): void {
    if (this.name === data.name) {
      this.x.set(data.x ?? 0);
      this.y.set(data.y ?? 0);
    } else {
      console.warn('Cannot update NPC with a different name', this.name, 'vs', data.name);
    }
  }

  protected override toLocalData(): NPCData {
    return {
      ...this.toBaseData(),
      x: this.x(),
      y: this.y(),
    };
  }
}
