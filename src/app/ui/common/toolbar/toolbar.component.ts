import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Auth,
  User as FirebaseUser,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getApp } from 'firebase/app';
import { environment } from '../../../../environments/environment';
import { UserSettings } from '../../../data/entities/fluid/user-settings';
import { UserSettingsService } from '../../../services/fluid/user-settings.service';
import { UserService } from '../../../services/user.service';
import { UserDialogComponent } from '../../pages/user-dialog/user-dialog.component';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatToolbarModule, MatButtonModule, MatTooltipModule],
})
export class ToolbarComponent {
  title = 'dma';
  user: FirebaseUser | null = null;
  isDev = !environment.production;
  private readonly analytics = getAnalytics(getApp());

  constructor(
    readonly userService: UserService,
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

        logEvent(this.analytics, 'login');
      })
      .catch((error) => {
        this.snackBar.open('Could not log in: ' + error, 'Dismiss');
        logEvent(this.analytics, 'login failed');
      });
  }

  onSettings() {
    this.dialog.open(UserDialogComponent);
  }
}
