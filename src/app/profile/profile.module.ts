import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule, SharedModule, FormsModule],
  declarations: [ProfileComponent]
})
export class ProfileModule {}
