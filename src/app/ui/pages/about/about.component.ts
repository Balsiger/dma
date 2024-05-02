import { Component } from '@angular/core';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';
import { AboutTextComponent } from './about-text.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [AboutTextComponent, PageComponent, PageTitleComponent],
})
export class AboutComponent {}
