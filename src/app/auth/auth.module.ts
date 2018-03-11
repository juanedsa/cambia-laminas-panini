import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, AngularFireAuthModule],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule {}
