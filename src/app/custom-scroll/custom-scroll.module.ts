import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomScrollComponent } from './custom-scroll.component';
@NgModule({

  declarations: [
    CustomScrollComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CustomScrollComponent
  ]
})

export class CustomScrollModule {

}
