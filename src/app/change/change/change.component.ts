import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../common/product.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  public monasRepeat;

  constructor(private productService: ProductService) {
    this.productService
      .products()
      .valueChanges()
      .subscribe(data => (this.monasRepeat = data));
  }

  ngOnInit() {}
}
