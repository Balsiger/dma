import { Component, input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../data/entities/product';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { EntityComponent } from '../entities/entity.component';
import { FormatterPipe } from '../pipes/formatter.pipe';
import { ProductDialogComponent } from './product-dialog.component';

@Component({
  selector: 'product',
  imports: [EntityComponent, FormatterPipe, LabeledTextComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  product = input.required<Product>();
  overview = input(true);
  collapsed = model(true);

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
