import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Monster } from '../../data/entities/immutable/monster';
import { Version } from '../../data/entities/immutable/values/enums/version';
import { EntitiesService } from '../../services/entity/entities.service';
import { Dialogs } from '../dialogs/dialogs';
import { EntityDetailsComponent } from '../entities/entity-details.component';
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
  imports: [ListPipe, EntityDetailsComponent, MonsterComponent],
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
