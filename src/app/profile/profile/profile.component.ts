import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../common/product.service';
import { Product } from '../../models/product';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../models/user';
import { UserService } from '../../common/user.service';

declare var $: any;
declare var Materialize: any;

type productsCollection = AngularFirestoreCollection<Product[]>;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public monas;

  public user: User;

  constructor(private productService: ProductService, private authService: AuthService, private userService: UserService) {
    this.authService.user.subscribe(user => {
      if (user) {
        this.user = user;
        this.productService
          .productsByUser(user.uid)
          .valueChanges()
          .subscribe(data => {
            this.monas = data;
          });
      }
    });
  }

  ngOnInit() {
    $('ul.tabs').tabs();
    $('.modal').modal();
  }

  openModal(): void {
    $('#modal-edit-profile').modal('open');
    Materialize.updateTextFields();
  }

  edit(): void {
    this.userService.save(this.user).then(() => {
      this.closeModal();
    });
  }

  closeModal(): void {
    $('#modal-edit-profile').modal('close');
  }
}
