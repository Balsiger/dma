import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../data/entities/product';
import { FormatterPipe } from '../common/formatter.pipe';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { PersonComponent } from '../common/person/person.component';
import { ValueComponent } from '../common/values/value.component';
import { EntityComponent } from '../pages/campaign/entity/entity.component';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'product',
  standalone: true,
  imports: [EntityComponent, FormatterPipe, LabeledTextComponent, ValueComponent, PersonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() overview = true;
  @Input() collapsed = true;

  @Output() expand = new EventEmitter<void>();
  @Output() collapse = new EventEmitter<void>();

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(ProductDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        product: this.product,
      },
    });
  }
}
