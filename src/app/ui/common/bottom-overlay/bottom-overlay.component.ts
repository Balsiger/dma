import { Component, input } from '@angular/core';

@Component({
    selector: 'bottom-overlay',
    imports: [],
    templateUrl: './bottom-overlay.component.html',
    styleUrl: './bottom-overlay.component.scss'
})
export class BottomOverlayComponent {
  hidden = input(true);
}
