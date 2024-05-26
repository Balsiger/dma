import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { environment } from '../../../../environments/environment';
import { UserDialogComponent as UserDialogComponent } from '../../pages/user-dialog/user-dialog.component';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatTooltipModule],
})
export class ToolbarComponent {
  title = 'dma';
  user: User | null = null;
  isDev = !environment.production;

  constructor(
    private readonly auth: Auth,
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog,
  ) {
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

  onSettings() {
    console.log('~~opening dialog');
    this.dialog.open(UserDialogComponent);
  }
}
