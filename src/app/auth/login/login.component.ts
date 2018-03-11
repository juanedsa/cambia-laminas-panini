import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { environment as ENV } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  myCaptchaCallback() {
    console.log('holaaa');
  }
}
