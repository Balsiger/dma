import { LowerCasePipe } from '@angular/common';
import { Component, forwardRef, input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Item } from '../../data/entities/item';
import { ItemSubtype } from '../../data/entities/values/enums/item-subtype';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { TaperComponent } from '../common/taper/taper.component';
import { EntityComponent } from '../entities/entity.component';
import { FormatterPipe } from '../pipes/formatter.pipe';
import { ListPipe } from '../pipes/list.pipe';
import { ModifierPipe } from '../pipes/modifier.pipe';
import { ItemDialogComponent } from './item-dialog.component';

@Component({
  standalone: true,
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [
    FormatterPipe,
    ListPipe,
    ModifierPipe,
    LabeledTextComponent,
    TaperComponent,
    MatTooltipModule,
    forwardRef(() => EntityComponent),
    LowerCasePipe,
  ],
})
export class ItemComponent {
  ItemSubtype = ItemSubtype;
  Version = Version;

  item = input<Item>();
  campaign = input<Campaign>();
  overview = input(true);
  count = input(1);

  collapsed = model(true);

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(ItemDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        item: this.item(),
        campaign: this.campaign(),
      },
    });
  }
}
