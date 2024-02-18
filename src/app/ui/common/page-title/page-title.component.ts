import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  imports: [MatTooltipModule, MatIconModule, MatButtonModule],
  standalone: true,
})
export class PageTitleComponent {
  @Input() category = '';
  @Input() action = '';
  @Input() tooltip = '';

  @Output() clicked = new EventEmitter<void>();

  constructor() {}

  onClick() {
    this.clicked.emit();
  }
}
