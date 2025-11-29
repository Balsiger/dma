import { NgClass } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'selection-tile',
  templateUrl: './selection-tile.component.html',
  styleUrls: ['./selection-tile.component.scss'],
  imports: [RouterLink, MatTooltipModule, MatButtonModule, MatIconModule, NgClass],
})
export class SelectionTileComponent {
  title = input('');
  image = input('');
  imageUrl = computed(() =>
    this.image().startsWith('http') || this.image().startsWith('/assets') ? this.image() : '/assets/' + this.image(),
  );
  target = input('');
  type = input('');
  selected = input(false);
  edit = input(false);
  delete = input(false);
  action = input('');

  clicked = output<void>();
  edited = output<void>();
  deleted = output<void>();
  actioned = output<void>();

  onClick() {
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
function compute() {
  throw new Error('Function not implemented.');
}
