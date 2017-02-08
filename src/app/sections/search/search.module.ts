import { NgModule, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

import { MovieListModule } from '../../movie-list/movie-list.module';
import { ButtonModule } from '../../button/button.module';

@NgModule({

  declarations: [
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MovieListModule,
    ButtonModule
  ],
  exports: [
    SearchComponent
  ]
})

export class SearchModule {

}
