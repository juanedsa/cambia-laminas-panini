import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { MenuItemsComponent } from './common/navigation/menu-items/menu-items.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
