import * as faker from 'faker';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { AuthService } from '../auth/auth.service';

type productsCollection = AngularFirestoreCollection<Product[]>;
type productDocument = AngularFirestoreDocument<Product>;

@Injectable()
export class ProductService {
  constructor(private afs: AngularFirestore, private authService: AuthService) {}

  products(): productsCollection {
    return this.afs.collection<Product[]>('products');
  }

  save(product: Product): Promise<any> {
    product.id = faker.random.alphaNumeric(16);
    return this.products()
      .doc(product.id)
      .set(Object.assign({}, product));
  }

  productsByUser(): productsCollection {
    const userId = this.authService.userId;
    return this.afs.collection<Product[]>('products', ref => ref.where('userId', '==', userId));
  }
}
