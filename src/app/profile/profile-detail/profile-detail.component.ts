import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../common/user.service';
import { User } from '../../models/user';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {
  public user: any;

  constructor(private route: ActivatedRoute, private userService: UserService, public auth: AuthService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService
        .userByUserName(params['userName'])
        .valueChanges()
        .take(1)
        .subscribe(userSnapShot => {
          this.user = userSnapShot[0];
        });
    });
  }
}
