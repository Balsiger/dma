import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'selection-tile',
    templateUrl: './selection-tile.component.html',
    styleUrls: ['./selection-tile.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        NgIf,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
    ],
})
export class SelectionTileComponent {
  @Input() title = '';
  @Input() image = '';
  @Input() target = '';
  @Input() type = '';
  @Input() edit = false;
  @Input() delete = false;

  @Output() edited = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<void>();

  constructor() {}

  onEdit(event: Event) {
    this.edited.emit();

    event.preventDefault();
    event.stopPropagation();
    event.cancelBubble = true;
  }

  onDelete(event: Event) {
    this.deleted.emit();

    event.preventDefault();
    event.stopPropagation();
    event.cancelBubble = true;
  }
}
