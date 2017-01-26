import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';

@NgModule({

  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    ButtonComponent
  ]
})

export class ButtonModule {

}
