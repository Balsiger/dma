import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { environment } from '../../../../environments/environment';
import { UserSettings } from '../../../data/facts/user-settings';
import { UserSettingsService } from '../../../services/fact/user-settings.service';
import { UserDialogComponent } from '../../pages/user-dialog/user-dialog.component';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
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
    private readonly settingsService: UserSettingsService,
  ) {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }

  onLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        const settings = this.settingsService.get(UserSettings.ID);
        settings.login(result.user.displayName || '', result.user.email || '');
      })
      .catch((error) => {
        this.snackBar.open('Could not log in: ' + error, 'Dismiss');
      });
  }

  onSettings() {
    this.dialog.open(UserDialogComponent);
  }
}
