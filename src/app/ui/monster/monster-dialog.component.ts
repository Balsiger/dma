import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Monster } from '../../data/entities/monster';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
import { EntitiesService } from '../../services/entity/entities.service';
import { ScreenImageButtonComponent } from '../campaign/screen/screen-image-button.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { Dialogs } from '../dialogs/dialogs';
import { ListPipe } from '../pipes/list.pipe';
import { MonsterComponent } from './monster.component';

export interface Data {
  monster: Monster;
  campaign?: Campaign;
}

@Component({
    selector: 'monster-dialog',
    templateUrl: './monster-dialog.component.html',
    styleUrls: ['./monster-dialog.component.scss'],
    imports: [MonsterComponent, ScreenImageButtonComponent, FormattedTextComponent, ListPipe]
})
export class MonsterDialogComponent {
  Version = Version;

  readonly monster: Monster;
  readonly campaign?: Campaign;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Data,
    changeDetector: ChangeDetectorRef,
    readonly entitiesService: EntitiesService,
    readonly dialogs: Dialogs,
  ) {
    this.monster = data.monster;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }

  onVersion(version: Version) {
    this.dialogs.open('monster', this.monster.name, undefined, undefined, undefined, version);
  }
}
