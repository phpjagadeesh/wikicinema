import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { environment } from '../../../environments/environment';
import 'rxjs/Rx';


@Injectable()

export class SearchService {
  
  public movies = [];
  
  constructor(private http: Http) {}
  
  getMovieDetais(inputKeyWord, inputLang = 'en')  {
  
    this.movies = [];
    return new Promise((resolve, reject) => {
    this.http.get(environment.movies.API_BASE_URL + 
      'api_key=' + environment.movies.API_KEY + 
      '&query=' + inputKeyWord + '&language=' + 
      inputLang + '&region=' + inputLang)
      .map((data) => {
         return this.movies.push(data.json());
       })
      .subscribe((results) => {
        resolve(this.movies);
       }, error => reject(error));
     });
  }

  getRecievedData() {
     return this.movies;
  }
}
