import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PopupWindowComponent } from './popup-window.component';

@NgModule({

  declarations: [
    PopupWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    PopupWindowComponent
  ]
})

export class PopupWindowModule {

}
