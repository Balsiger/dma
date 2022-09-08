import { Component, Input } from '@angular/core';

@Component({
  selector: 'labeled-text',
  templateUrl: './labeled-text.component.html',
  styleUrls: ['./labeled-text.component.scss'],
})
export class LabeledTextComponent {
  @Input() label = '';

  constructor() {}
}
