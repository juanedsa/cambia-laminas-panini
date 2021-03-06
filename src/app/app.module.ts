import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { environment as ENV } from '../environments/environment';
import { MenuItemsComponent } from './common/navigation/menu-items/menu-items.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChangeModule } from './change/change.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent, MenuItemsComponent],
  imports: [
    FormsModule,
    BrowserModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(ENV.firebase),
    AngularFirestoreModule,
    ProfileModule,
    ChangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
