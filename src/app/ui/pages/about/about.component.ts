import { Component, OnInit } from '@angular/core';
import { AboutTextComponent } from '../../common/about-text/about-text.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true,
    imports: [AboutTextComponent]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
