import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'expanding-button',
    imports: [CommonModule, MatButtonModule],
    templateUrl: './expanding-button.component.html',
    styleUrl: './expanding-button.component.scss'
})
export class ExpandingButtonComponent {
  expanded = false;

  onToggle() {
    this.expanded = !this.expanded;
  }
}
