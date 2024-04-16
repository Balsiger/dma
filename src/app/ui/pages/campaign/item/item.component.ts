import { LowerCasePipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Item } from '../../../../data/entities/item';
import { ItemSubtype } from '../../../../data/entities/values/enums/item-subtype';
import { Campaign } from '../../../../data/facts/campaign';
import { FormatterPipe } from '../../../common/formatter.pipe';
import { LabeledTextComponent } from '../../../common/labeled-text/labeled-text.component';
import { ModifierPipe } from '../../../common/modifier.pipe';
import { TaperComponent } from '../../../common/taper/taper.component';
import { ReferenceComponent } from '../../common/reference/reference.component';
import { EntityComponent } from '../entity/entity.component';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';

@Component({
  standalone: true,
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [
    ReferenceComponent,
    FormatterPipe,
    ModifierPipe,
    LabeledTextComponent,
    TaperComponent,
    MatTooltipModule,
    forwardRef(() => EntityComponent),
    LowerCasePipe,
    NgIf,
    NgFor,
  ],
})
export class ItemComponent {
  ItemSubtype = ItemSubtype;

  @Input() item!: Item;
  @Input() campaign?: Campaign;
  @Input() overview = true;
  @Input() collapsed = true;
  @Input() count = 1;

  @Output() expand = new EventEmitter<void>();
  @Output() collapse = new EventEmitter<void>();

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(ItemDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        item: this.item,
        campaign: this.campaign,
      },
    });
  }
}
