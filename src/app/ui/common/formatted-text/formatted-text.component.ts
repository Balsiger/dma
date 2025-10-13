import { Component, Injector, input } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormatterPipe } from '../../pipes/formatter.pipe';
import { ReferenceComponent } from '../reference/reference.component';

@Component({
  selector: 'formatted-text',
  templateUrl: './formatted-text.component.html',
  styleUrls: ['./formatted-text.component.scss'],
  imports: [FormatterPipe],
})
export class FormattedTextComponent {
  text = input('');

  private static inited = false;

  constructor(private readonly injector: Injector) {
    if (!FormattedTextComponent.inited) {
      // TODO: this is only an example, remove it and replace it with a properly needed component.
      const element = createCustomElement(ReferenceComponent, { injector: this.injector });
      customElements.define('dma-reference', element);
      FormattedTextComponent.inited = true;
    }
  }
}
