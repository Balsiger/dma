import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class AboutTextComponent {
  constructor() {}
}
