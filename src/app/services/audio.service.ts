import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private readonly element: HTMLAudioElement | null = document.getElementById('dma-audio') as HTMLAudioElement;

  constructor() {}

  play(src: string) {
    if (this.element) {
      this.element.src = '/assets/sounds/' + src;
      this.element.play();
    }
  }
}
