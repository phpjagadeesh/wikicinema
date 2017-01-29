import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component';
import { NavbarIconModule } from './navbar-icon/navbar-icon.module';
import { InputModule } from '../input/input.module';
import { ButtonModule } from '../button/button.module';
import { PopupWindowModule } from '../popup-window/popup-window.module';

import { SearchService } from '../core/search/search.service';


@NgModule({

  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NavbarIconModule,
    InputModule,
    ButtonModule,
    FormsModule,
    PopupWindowModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    SearchService
  ]
})

export class NavbarModule {

}
