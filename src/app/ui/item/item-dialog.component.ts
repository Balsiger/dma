import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../../data/entities/item';
import { Campaign } from '../../data/facts/campaign';
import { ScreenImageButtonComponent } from '../campaign/screen/screen-image-button.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { ItemComponent } from './item.component';

export interface Data {
  item: Item;
  campaign?: Campaign;
}

@Component({
  selector: 'item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss'],
  standalone: true,
  imports: [ScreenImageButtonComponent, FormattedTextComponent, ItemComponent],
})
export class ItemDialogComponent {
  readonly item: Item;
  readonly campaign?: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data, changeDetector: ChangeDetectorRef) {
    this.item = data.item;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
