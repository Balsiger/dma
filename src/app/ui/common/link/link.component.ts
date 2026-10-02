import { Component, computed, input, ChangeDetectionStrategy } from '@angular/core';
import { Link } from '../../../data/values/link';

const PATTERN_LINK = /^(.*)\s*\[(.*)\]\s*$/;

@Component({
  standalone: true,
  selector: 'dma-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  target = input('_blank');
  text = input('');
  linkInput = input<Link | undefined>(undefined, { alias: 'link' });

  link = computed(() => (this.linkInput() ? this.linkInput()! : Link.parse(this.text())));
}
