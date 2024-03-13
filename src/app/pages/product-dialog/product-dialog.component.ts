import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../data/entities/product';
import { ProductComponent } from '../../product/product.component';
import { FormattedTextComponent } from '../../ui/common/formatted-text/formatted-text.component';
import { PersonComponent } from '../../ui/common/person/person.component';

export interface Data {
  product: Product;
}

@Component({
  selector: 'product-dialog',
  standalone: true,
  imports: [ProductComponent, FormattedTextComponent, PersonComponent],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.scss',
})
export class ProductDialogComponent {
  readonly product: Product;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data) {
    this.product = data.product;
  }
}
