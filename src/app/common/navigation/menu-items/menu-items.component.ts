import { AuthService } from './../../../auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {
  constructor(public auth: AuthService, private router: Router) {}

  goToLogin(): void {
    $('.button-collapse').sideNav('hide');
    this.router.navigate(['/login']);
  }

  goToChangeMonas(): void {
    $('.button-collapse').sideNav('hide');
    this.router.navigate(['/cambiar-monas']);
  }

  goToProfile(): void {
    $('.button-collapse').sideNav('hide');
    this.router.navigate(['/perfil']);
  }

  logOut(): void {
    $('.button-collapse').sideNav('hide');
    this.auth.signOut();
  }

}
