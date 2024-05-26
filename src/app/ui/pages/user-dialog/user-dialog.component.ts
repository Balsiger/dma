import { Component, computed, effect } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { firstValueFrom } from 'rxjs';
import { UserMiniatures } from '../../../data/facts/user-miniature';
import { UserSettings } from '../../../data/facts/user-settings';
import { UserMiniatureService } from '../../../services/fact/user-miniature.service';
import { UserSettingsService } from '../../../services/fact/user-settings.service';
import { UserService } from '../../../services/user.service';
import { DialogComponent } from '../../common/dialog/dialog.component';
import { LocationDialogComponent } from '../../miniatures/location/location-dialog.component';

@Component({
  selector: 'user',
  standalone: true,
  imports: [
    DialogComponent,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss',
})
export class UserDialogComponent {
  user = computed(() => this.service.user());
  settings?: UserSettings;
  userMiniatures?: UserMiniatures;
  widthPx = new FormControl<number | null>(null);
  heightPx = new FormControl<number | null>(null);
  widthCm = new FormControl<number | null>(null);
  heightCm = new FormControl<number | null>(null);

  constructor(
    private readonly dialog: MatDialog,
    private readonly service: UserService,
    private readonly miniService: UserMiniatureService,
    private readonly settingsService: UserSettingsService,
    private readonly snackBar: MatSnackBar,
    private readonly ref: MatDialogRef<UserDialogComponent>,
  ) {
    this.load();

    effect(() => {
      if (this.settings) {
        this.widthPx.setValue(this.settings.tv()?.pxWidth() || null);
        this.heightPx.setValue(this.settings.tv()?.pxHeight() || null);
        this.widthCm.setValue(this.settings.tv()?.cmWidth() || null);
        this.heightCm.setValue(this.settings.tv()?.cmHeight() || null);
      }
    });
  }

  async load() {
    this.userMiniatures = this.miniService.get(UserMiniatures.ID);
    this.settings = this.settingsService.get(UserSettings.ID);
  }

  async onEditLocation() {
    if (this.userMiniatures) {
      const dialog = this.dialog.open(LocationDialogComponent, {
        hasBackdrop: true,
        disableClose: true,
        data: [...this.userMiniatures.locations()],
      });

      const savedLocations = await firstValueFrom(dialog.afterClosed());
      if (savedLocations) {
        this.userMiniatures.setLocations(savedLocations);
      }
    }
  }

  async onSave() {
    this.settings?.update({
      tv: {
        px: {
          width: Number(this.widthPx.value),
          height: Number(this.heightPx.value),
        },
        cm: {
          width: Number(this.widthCm.value),
          height: Number(this.heightCm.value),
        },
      },
    });
    this.settings?.save();
    this.snackBar.open('Settings saved', undefined, { duration: 2000 });
    this.ref.close();
  }

  async onCancel() {
    this.ref.close();
  }
}
