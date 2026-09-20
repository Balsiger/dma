import { LowerCasePipe } from '@angular/common';
import { Component, forwardRef, input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Item } from '../../data/entities/static/item';
import { ItemSubtype } from '../../data/entities/static/values/enums/item-subtype';
import { Version } from '../../data/entities/static/values/enums/version';
import { WeaponMastery } from '../../data/entities/static/values/enums/weapon-mastesry';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { TaperComponent } from '../common/taper/taper.component';
import { EntityComponent } from '../entities/entity.component';
import { FormatterPipe } from '../pipes/formatter.pipe';
import { ListPipe } from '../pipes/list.pipe';
import { ModifierPipe } from '../pipes/modifier.pipe';
import { ItemDialogComponent } from './item-dialog.component';

@Component({
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
  WeaponMastery = WeaponMastery;

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
