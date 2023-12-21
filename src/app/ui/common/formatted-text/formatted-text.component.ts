import { Component, Injector, Input } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReferenceComponent } from '../../pages/common/reference/reference.component';
import { FormatterPipe } from '../formatter.pipe';

@Component({
  selector: 'formatted-text',
  templateUrl: './formatted-text.component.html',
  styleUrls: ['./formatted-text.component.scss'],
  standalone: true,
  imports: [FormatterPipe],
})
export class FormattedTextComponent {
  @Input() text = '';
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
