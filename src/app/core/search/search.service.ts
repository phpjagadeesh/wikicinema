import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class SearchService {
  
  private movies = [];
  constructor(private http: Http) {}
  
  getMovieDetais() {

    this.http.get('https://api.themoviedb.org/3/search/movie?' + 
      'api_key=af708b4d3ed724d2d43f01c3eb56291d&query=batm&language=EN&region=EN')
      .subscribe((data) => {
        this.movies.push(data);
    });

    return this.movies;
    } 
  }

