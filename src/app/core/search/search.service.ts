import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { environment } from '../../../environments/environment';
import 'rxjs/Rx';

@Injectable()

export class SearchService {
  
  private movies = [];
  
  constructor(private http: Http) {}
  
  getMovieDetais() {
    this.http.get(environment.movies.API_BASE_URL + 
      'api_key=' + environment.movies.API_KEY + '&query=batm&language=EN&region=EN')
      .subscribe((data) => {
        this.movies.push(data);
    });
    return this.movies;
  }

  getRecievedData() {
    return this.movies;
  }
}
