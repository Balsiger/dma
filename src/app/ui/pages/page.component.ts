import { Component, input } from '@angular/core';
import { FooterComponent } from '../common/footer/footer.component';
import { ToolbarComponent } from '../common/toolbar/toolbar.component';
import { PageTitleComponent } from './page-title.component';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  standalone: true,
  imports: [ToolbarComponent, PageTitleComponent, FooterComponent],
})
export class PageComponent {
  withTitle = input(false);
  hasUser = input(false);
  sidebars = input(true);
}
