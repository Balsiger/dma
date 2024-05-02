import { Component } from '@angular/core';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';
import { AboutTextComponent } from '../about/about-text.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  standalone: true,
  imports: [PageComponent, SelectionTileComponent, AboutTextComponent],
})
export class TitleComponent {
  user: User | null | undefined = undefined;

  constructor(private readonly auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }
}
