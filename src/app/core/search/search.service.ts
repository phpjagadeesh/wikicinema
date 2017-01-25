import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class searchService {
  
  constructor(private http: Http) {}
  
  getMovieDetais() {
      return 'movie';
  }

}
