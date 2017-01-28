import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { environment } from '../../../environments/environment';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class SearchService {
  
  public movies = [];
  
  constructor(private http: Http) {}
  
  getMovieDetais(inputKeyWord)  {
    this.movies = [];
    this.http.get(environment.movies.API_BASE_URL + 
      'api_key=' + environment.movies.API_KEY + '&query=' +inputKeyWord+ '&language=EN&region=EN')
      .map((data) => {
         this.movies.push(data.json());
       })
      .subscribe((results) => {
        return this.movies;
    });
  }

  getRecievedData() {
     return this.movies;
  }
}
