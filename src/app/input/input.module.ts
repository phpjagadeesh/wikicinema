import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

@NgModule({

  declarations: [
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    InputComponent
  ]
})

export class InputModule {

}
