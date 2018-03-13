import * as faker from 'faker';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

type productsCollection = AngularFirestoreCollection<Product[]>;
type productDocument = AngularFirestoreDocument<Product>;

@Injectable()
export class ProductService {
  constructor(private afs: AngularFirestore) {}

  products(): productsCollection {
    return this.afs.collection<Product[]>('products');
  }

  save(product: Product): Promise<any> {
    product.id = faker.random.alphaNumeric(16);
    return this.products()
      .doc(product.id)
      .set(Object.assign({}, product));
  }
}
