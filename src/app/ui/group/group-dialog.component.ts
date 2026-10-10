import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Version } from '../../data/entities/immutable/values/enums/version';
import { ImmutablesService } from '../../services/immutable/immutables.service';
import { EntityDetailsComponent } from '../entities/entity-details.component';
import { GroupComponent } from './group.component';
import { Group } from '../../data/entities/immutable/group';
import { GroupCardComponent } from './group-card.component';

export interface Data {
  group: Group;
  campaign?: Campaign;
}

@Component({
  selector: 'group-dialog',
  templateUrl: './group-dialog.component.html',
  styleUrls: ['./group-dialog.component.scss'],
  imports: [GroupComponent, EntityDetailsComponent, GroupCardComponent],
})
export class GroupDialogComponent {
  Version = Version;

  readonly group: Group;
  readonly campaign?: Campaign;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Data,
    changeDetector: ChangeDetectorRef,
    readonly entitiesService: ImmutablesService,
  ) {
    this.group = data.group;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
