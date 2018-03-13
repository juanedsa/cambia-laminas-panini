import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-mona',
  templateUrl: './mona.component.html',
  styleUrls: ['./mona.component.scss']
})
export class MonaComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit() {}

  addMonaRepeat() {
    if (this.product.count >= 1) {
      this.product.count++;
    }
  }

  removeMonaRepeat() {
    if (this.product.count > 1) {
      this.product.count--;
    }
  }
}
