import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Campaign } from '../../../../data/things/campaign';

@Component({
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
})
export class EntityComponent {
  @Input() name = '';
  @Input() references = '';
  @Input() hue = 0;
  @Input() overview = true;
  @Input() baseType: 'monster' | 'item' | 'spell' = 'item';
  @Input() bases: string[] = [];
  @Input() campaign?: Campaign;
  @Input() collapsed = false;

  @Output() full = new EventEmitter<void>();
  @Output() expand = new EventEmitter<void>();
  @Output() collapse = new EventEmitter<void>();

  constructor() {}

  onFull(event: Event) {
    this.full.emit();
    event.stopPropagation();
  }

  onCollapse() {
    this.collapsed = true;
    this.collapse.emit();
  }

  onExpand() {
    this.collapsed = false;
    this.expand.emit();
  }

  onMaybeExpand() {
    if (this.collapsed) {
      this.onExpand();
    }
  }
}
