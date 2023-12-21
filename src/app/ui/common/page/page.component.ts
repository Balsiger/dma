import { Component, Input, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PageTitleComponent } from '../page-title/page-title.component';
import { NgIf } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
    selector: 'page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    standalone: true,
    imports: [
        ToolbarComponent,
        NgIf,
        PageTitleComponent,
        FooterComponent,
    ],
})
export class PageComponent implements OnInit {
  @Input() withTitle = false;

  constructor() {}

  ngOnInit(): void {}
}
