import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../../common/product.service';
import { UserService } from '../../common/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnDestroy {
  public monasRepeat;
  public filteredMonasRepeat;
  public registeredUsers;
  public filter;

  private productSubs: Subscription;
  private userSubs: Subscription;

  constructor(private productService: ProductService, private userService: UserService) {
    this.productSubs = this.productService
      .products()
      .valueChanges()
      .subscribe(data => {
        this.monasRepeat = data;
        this.assignCopy();
      });

    this.userSubs = this.userService
      .users()
      .valueChanges()
      .subscribe(users => (this.registeredUsers = users.length));
  }

  ngOnDestroy(): void {
    this.productSubs.unsubscribe();
    this.userSubs.unsubscribe();
  }

  assignCopy() {
    this.filteredMonasRepeat = Object.assign([], this.monasRepeat);
  }

  filterItem(value) {
    if (!value) {
      this.assignCopy();
    }
    this.filteredMonasRepeat = Object.assign([], this.monasRepeat).filter(
      item =>
        item.number
          .toString()
          .toLowerCase()
          .indexOf(value.toLowerCase()) > -1
    );
  }
}
