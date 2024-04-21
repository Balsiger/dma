import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { References } from '../../../../data/entities/values/references';
import { Campaign } from '../../../../data/facts/campaign';
import { DialogType } from '../../../common/dialogs';
import { TaperComponent } from '../../../common/taper/taper.component';
import { ReferenceComponent } from '../../common/reference/reference.component';

@Component({
  standalone: true,
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
  imports: [MatIconModule, TaperComponent, ReferenceComponent, MatButtonModule, ReferenceComponent],
})
export class EntityComponent {
  @Input() name = '';
  @Input() references?: References;
  @Input() type: DialogType = 'monster';
  @Input() overview = true;
  @Input() baseType: DialogType = 'item';
  @Input() bases: string[] = [];
  @Input() campaign?: Campaign;
  @Input() collapsed = false;
  @Input() count = 1;
  @Input() found = true;

  @Output()
  full = new EventEmitter<void>();
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
