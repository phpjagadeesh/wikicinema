import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PopupWindowComponent } from './popup-window.component';

import { ModalModule } from "ngx-modal";
import { InputModule } from '../input/input.module';

@NgModule({

  declarations: [
    PopupWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    InputModule
  ],
  exports: [
    PopupWindowComponent
  ]
})

export class PopupWindowModule {

}
