import { signal } from '@angular/core';
import { Context } from '../../../services/context';
import { Local, LocalData } from './local';

export interface CharacterData extends LocalData {
  x?: number;
  y?: number;
}

export class LocalCharacter extends Local<LocalCharacter, CharacterData> {
  x = signal(0);
  y = signal(0);

  constructor(name: string, context: Context) {
    super(context.extendTerminal('character'), name, '');
  }

  setPosition(x: number, y: number) {
    this.x.set(x);
    this.y.set(y);
    this.store();
  }

  clearPosition() {
    this.setPosition(0, 0);
  }

  override localUpdate(data: CharacterData): void {
    if (this.name === data.name) {
      this.x.set(data.x ?? 0);
      this.y.set(data.y ?? 0);
    } else {
      console.warn('Cannot update character with a different name', this.name, 'vs', data.name);
    }
  }

  protected override toLocalData(): CharacterData {
    return {
      ...this.toBaseData(),
      x: this.x(),
      y: this.y(),
    };
  }
}
