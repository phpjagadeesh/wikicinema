import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { InputModule } from './input/input.module';
import { ButtonModule } from './button/button.module';

import '../styles.scss';

import { SearchService } from './core/search/search.service';
import { MovieListModule } from './movie-list/movie-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    InputModule,
    ButtonModule,
    MovieListModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
