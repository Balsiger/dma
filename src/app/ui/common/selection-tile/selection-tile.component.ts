import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'selection-tile',
  templateUrl: './selection-tile.component.html',
  styleUrls: ['./selection-tile.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf, MatTooltipModule, MatButtonModule, MatIconModule, NgClass],
})
export class SelectionTileComponent {
  @Input() title = '';
  @Input() image = '';
  @Input() target = '';
  @Input() type = '';
  @Input() selected = false;
  @Input() edit = false;
  @Input() delete = false;
  @Input() action = '';

  @Output() clicked = new EventEmitter<void>();
  @Output() edited = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<void>();
  @Output() actioned = new EventEmitter<void>();

  constructor() {}

  onClick(event: Event) {
    this.clicked.emit();
  }

  onEdit(event: Event) {
    this.edited.emit();

    event.preventDefault();
    event.stopPropagation();
  }

  onDelete(event: Event) {
    this.deleted.emit();

    event.preventDefault();
    event.stopPropagation();
  }

  onAction(event: Event) {
    this.actioned.emit();

    event.preventDefault();
    event.stopPropagation();
  }
}
