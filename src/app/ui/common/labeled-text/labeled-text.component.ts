import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'labeled-text',
  templateUrl: './labeled-text.component.html',
  styleUrls: ['./labeled-text.component.scss'],
  imports: [],
})
export class LabeledTextComponent {
  @Input() label = '';

  constructor() {}
}
