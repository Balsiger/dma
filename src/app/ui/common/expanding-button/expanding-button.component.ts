import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'expanding-button',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './expanding-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './expanding-button.component.scss',
})
export class ExpandingButtonComponent {
  expanded = false;

  onToggle() {
    this.expanded = !this.expanded;
  }
}
