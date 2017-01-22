import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';
import { NavrbarIconComponent } from './navrbar-icon/navrbar-icon.component';

@NgModule({

  declarations: [
    NavbarComponent,
    NavrbarIconComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NavbarComponent
  ]
})

export class NavbarModule {

}
