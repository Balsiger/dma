import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'selection-tile',
  templateUrl: './selection-tile.component.html',
  styleUrls: ['./selection-tile.component.scss'],
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
