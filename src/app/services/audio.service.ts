import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  async play(src: string) {
    const source = (src.startsWith('http') ? '' : '/assets/sounds/') + src;
    new Audio(source).play();
  }
}
