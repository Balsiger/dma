import { ChangeDetectorRef, Component, forwardRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../../data/entities/item';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
import { EntitiesService } from '../../services/entity/entities.service';
import { EntityDetailsComponent } from '../entities/entity-details.component';
import { ItemCardComponent } from './item-card.component';
import { ItemComponent } from './item.component';

export interface Data {
  item: Item;
  campaign?: Campaign;
}

@Component({
  selector: 'item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss'],
  imports: [forwardRef(() => ItemComponent), EntityDetailsComponent, ItemCardComponent],
})
export class ItemDialogComponent {
  Version = Version;

  readonly item: Item;
  readonly campaign?: Campaign;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Data,
    changeDetector: ChangeDetectorRef,
    readonly entities: EntitiesService,
  ) {
    this.item = data.item;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
