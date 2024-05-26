import { Injectable, computed } from '@angular/core';
import { UserSettingsService } from '../../services/fact/user-settings.service';
import { UserSettings } from '../facts/user-settings';

const TV_WIDTH_PX = 1920;
const TV_HEIGHT_PX = 1080;
const TV_WIDTH_CM = 105;
const TV_HEIGHT_CM = 60;

@Injectable({ providedIn: 'root' })
export class Settings {
  settings = this.service.get(UserSettings.ID);
  tvWidthPx = computed(() => this.settings.tv().pxWidth());
  tvHeightPx = computed(() => this.settings.tv().pxHeight());
  tvWidthCm = computed(() => this.settings.tv().cmWidth());
  tvHeightCm = computed(() => this.settings.tv().cmHeight());
  tvPxPerSquare = computed(
    () => Math.floor((this.tvWidthPx() / this.tvWidthCm()) * 2.5 + (this.tvHeightPx() / this.tvHeightCm()) * 2.5) / 2,
  );

  constructor(private readonly service: UserSettingsService) {}
}
