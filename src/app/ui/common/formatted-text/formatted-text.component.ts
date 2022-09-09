import { Component, Injector, Input } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TaperComponent } from '../taper/taper.component';

@Component({
  selector: 'formatted-text',
  templateUrl: './formatted-text.component.html',
  styleUrls: ['./formatted-text.component.scss'],
})
export class FormattedTextComponent {
  @Input() text = '';
  private static inited = false;

  constructor(private readonly injector: Injector) {
    if (!FormattedTextComponent.inited) {
      // TODO: this is only an example, remove it and replace it with a properly needed component.
      const element = createCustomElement(TaperComponent, { injector: this.injector });
      customElements.define('dma-taper', element);
      FormattedTextComponent.inited = true;
    }
  }
}
