import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from '@angular/fire/auth';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
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
