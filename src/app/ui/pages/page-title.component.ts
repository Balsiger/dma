import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss'],
    imports: [MatTooltipModule, MatIconModule, MatButtonModule]
})
export class PageTitleComponent {
  category = input('');
  action = input('');
  tooltip = input('');

  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
