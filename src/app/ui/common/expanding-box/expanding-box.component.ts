import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'expanding-box',
  standalone: true,
  imports: [CommonModule, NgbPopoverModule, MatIconModule],
  templateUrl: './expanding-box.component.html',
  styleUrl: './expanding-box.component.scss',
})
export class ExpandingBoxComponent {
  showClose = input(false);
  closeOnClick = input(true);
  placement = input('end');
  positionTarget = input<string>();

  shown = output<void>();
}
