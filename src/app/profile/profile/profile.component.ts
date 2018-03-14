import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../common/product.service';
import { Product } from '../../models/product';

declare var $: any;

type productsCollection = AngularFirestoreCollection<Product[]>;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  monas;

  constructor(private productService: ProductService) {
    this.productService
      .productsByUser()
      .valueChanges()
      .subscribe(data => {
        this.monas = data;
      });
  }

  ngOnInit() {
    $('ul.tabs').tabs();
  }
}
