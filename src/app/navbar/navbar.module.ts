import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';
import { NavbarIconModule } from './navbar-icon/navbar-icon.module';


@NgModule({

  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NavbarIconModule
  ],
  exports: [
    NavbarComponent
  ]
})

export class NavbarModule {

}
