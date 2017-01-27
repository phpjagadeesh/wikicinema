import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieListComponent } from './movie-list.component';

@NgModule({

  declarations: [
    MovieListComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MovieListComponent
  ]
})

export class MovieListModule {

}
