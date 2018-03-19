import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from './../../common/product.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

declare var $: any;

@Component({
  selector: 'app-add-mona-modal',
  templateUrl: './add-mona-modal.component.html',
  styleUrls: ['./add-mona-modal.component.scss']
})
export class AddMonaModalComponent implements OnInit {
  number: number;
  count: number;
  currentUser;

  constructor(private productService: ProductService, private authService: AuthService) {}

  ngOnInit() {
    $('.modal').modal();
    this.number = null;
    this.count = null;

    this.authService.user.subscribe(user => {
      if (user) {
        this.currentUser = user;
      }
    });
  }

  closeModal(): void {
    this.number = null;
    this.count = null;

    $('#modal').modal('close');
  }

  addMona(): void {
    const product = new Product();

    product.number = this.number;
    product.count = this.count || 1;
    product.userId = this.currentUser.uid;
    product.userName = this.currentUser.userName;

    this.productService.save(product).then(() => {
      this.number = null;
      this.count = null;
    });
  }
}
