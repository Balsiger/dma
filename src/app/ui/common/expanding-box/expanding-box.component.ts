import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() showClose = false;
  @Input() closeOnClick = true;
  @Input() placement = 'end';
  @Input() positionTarget?: string;

  @Output() shown = new EventEmitter<void>();
}
