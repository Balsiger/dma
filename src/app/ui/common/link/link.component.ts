import { Component, Input } from '@angular/core';

const PATTERN_LINK = /^(.*)\s*\[(.*)\]\s*$/;

@Component({
  standalone: true,
  selector: 'dma-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input() target = '_blank';
  @Input() set text(text: string) {
    this.update(text);
  }

  link: string = '';
  label: string = '';

  constructor() {}

  private update(text: string) {
    console.log('text', text);

    if (text.startsWith('http:') || text.startsWith('https:')) {
      this.link = text;
      this.label = text;
    } else {
      const match = text.match(PATTERN_LINK);
      if (match) {
        this.link = match[2];
        this.label = match[1];
      } else {
        this.link = '';
        this.label = text;
      }
    }
  }
}
