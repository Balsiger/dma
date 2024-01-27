import { Component, Input } from '@angular/core';

@Component({
    selector: 'page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss'],
    standalone: true
})
export class PageTitleComponent {
  @Input() category = '';

  constructor() { }
}
