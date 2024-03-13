import { Injectable } from '@angular/core';
import { Product } from '../data/entities/product';
import { ProtoRpc } from '../net/ProtoRpc';
import { ProductsProto } from '../proto/generated/template_pb';
import { EntityService } from './entity.service';

@Injectable({ providedIn: 'root' })
export class ProductsService extends EntityService<Product, ProductsProto> {
  constructor() {
    super('/assets/data/products.pb', Product.create, new ProtoRpc(ProductsProto.deserializeBinary), (p) =>
      p.getProductsList().map((m) => Product.fromProto(m)),
    );
  }
}
