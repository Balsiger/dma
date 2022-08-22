import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dma';
  user: User|null = null;

  constructor(private readonly auth: Auth, private readonly snackBar: MatSnackBar) {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }  

  onLogin() {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then((result) => {
      // Handled in observer above.
    }).catch((error) => {
      this.snackBar.open('Could not log in: ' + error, 'Dismiss');
    })
  }
}
