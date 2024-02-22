import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'expanding-box',
  standalone: true,
  imports: [CommonModule, NgbPopoverModule],
  templateUrl: './expanding-box.component.html',
  styleUrl: './expanding-box.component.scss',
})
export class ExpandingBoxComponent {
  @Input() closeOnClick = true;
  @Input() placement = 'end';
  @Input() positionTarget?: string;

  @Output() shown = new EventEmitter<void>();
}
