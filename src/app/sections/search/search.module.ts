import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

import { MovieListModule } from '../../movie-list/movie-list.module';

@NgModule({

  declarations: [
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MovieListModule
  ],
  exports: [
    SearchComponent
  ]
})

export class SearchModule {

}
