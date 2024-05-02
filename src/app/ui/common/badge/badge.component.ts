import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'badge',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  label = input('');
  disabled = input(false);

  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
