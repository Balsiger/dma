import { Component, Input } from '@angular/core';
import { Link } from './link';

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
    this.link = Link.parse(text);
  }
  @Input() link?: Link;

  constructor() {}
}
