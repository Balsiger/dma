import { ChangeDetectorRef, Component, forwardRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trap } from '../../data/entities/trap';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
import { EntitiesService } from '../../services/entity/entities.service';
import { EntityDetailsComponent } from '../entities/entity-details.component';
import { TrapCardComponent } from './trap-card.component';
import { TrapComponent } from './trap.component';

export interface Data {
  trap: Trap;
  campaign?: Campaign;
}

@Component({
  selector: 'trap-dialog',
  templateUrl: './trap-dialog.component.html',
  styleUrls: ['./trap-dialog.component.scss'],
  imports: [forwardRef(() => TrapComponent), EntityDetailsComponent, TrapCardComponent],
})
export class TrapDialogComponent {
  Version = Version;

  readonly trap: Trap;
  readonly campaign?: Campaign;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Data,
    changeDetector: ChangeDetectorRef,
    readonly entities: EntitiesService,
  ) {
    this.trap = data.trap;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
