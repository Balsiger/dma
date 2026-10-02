import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';
import { AboutTextComponent } from './about-text.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [AboutTextComponent, PageComponent, PageTitleComponent],
})
export class AboutComponent {}
