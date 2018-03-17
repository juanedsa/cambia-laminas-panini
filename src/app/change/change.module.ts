import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRoutingModule } from './change-routing.module';
import { ChangeComponent } from './change/change.component';
import {ProfileModule} from '../profile/profile.module';

@NgModule({
  imports: [
    CommonModule,
    ChangeRoutingModule
  ],
  declarations: [ChangeComponent]
})
export class ChangeModule { }
