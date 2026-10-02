import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bottom-overlay',
  imports: [],
  templateUrl: './bottom-overlay.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './bottom-overlay.component.scss',
})
export class BottomOverlayComponent {
  hidden = input(true);
}
