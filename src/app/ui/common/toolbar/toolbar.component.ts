import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../../environments/environment';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    standalone: true,
    imports: [
        MatToolbarModule,
        NgIf,
        MatButtonModule,
        MatTooltipModule,
    ],
})
export class ToolbarComponent {
  title = 'dma';
  user: User | null = null;
  isDev = !environment.production;

  constructor(private readonly auth: Auth, private readonly snackBar: MatSnackBar) {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }

  onLogin() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((result) => {
        // Handled in observer above.
      })
      .catch((error) => {
        this.snackBar.open('Could not log in: ' + error, 'Dismiss');
      });
  }
}
