import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Campaign } from '../../../../data/things/campaign';
import { TaperComponent } from '../../../common/taper/taper.component';
import { ReferenceComponent } from '../../common/reference/reference.component';

@Component({
  standalone: true,
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
  imports: [MatIconModule, TaperComponent, ReferenceComponent, NgIf, NgFor, MatButtonModule],
})
export class EntityComponent {
  @Input() name = '';
  @Input() references = '';
  @Input() type: 'npc' | 'monster' | 'spell' | 'item' | 'condition' = 'monster';
  @Input() overview = true;
  @Input() baseType: 'npc' | 'monster' | 'item' | 'spell' | 'condition' = 'item';
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
