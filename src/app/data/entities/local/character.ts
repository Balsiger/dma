import { signal } from '@angular/core';
import { Local, LocalData } from './local';

export interface CharacterData extends LocalData {
  x?: number;
  y?: number;
}

export class LocalCharacter extends Local<LocalCharacter, CharacterData> {
  x = signal(0);
  y = signal(0);

  constructor(name: string, context: string) {
    super('character', context, name, '');

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

  protected override localUpdate(data: CharacterData): void {
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
