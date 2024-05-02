import { Component, computed, input } from '@angular/core';
import { Link } from '../../../data/values/link';

const PATTERN_LINK = /^(.*)\s*\[(.*)\]\s*$/;

@Component({
  standalone: true,
  selector: 'dma-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  target = input('_blank');
  text = input('');

  link = computed(() => Link.parse(this.text()));
}
