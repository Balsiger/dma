import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AboutTextComponent } from '../../common/about-text/about-text.component';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';
import { PageComponent } from '../../common/page/page.component';

@Component({
    selector: 'title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    standalone: true,
    imports: [
        PageComponent,
        SelectionTileComponent,
        AboutTextComponent,
    ],
})
export class TitleComponent {
  user: User | null = null;

  constructor() {}
}
