import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { environment } from '../../../environments/environment';
import 'rxjs/Rx';


@Injectable()

export class SearchService implements OnInit {
  
  public movies = [];
  public inputKeyWord: string;
  public inputLang: string;
  public page: number;
  
  constructor(private http: Http) {}
  
  ngOnInit() {
    this.inputLang = 'en';
    this.page = 1;
  }
  
  getMovieDetais(inputKeyWord, inputLang = 'en', page = 1)  {
    
    this.movies = [];
    this.inputKeyWord = inputKeyWord;
    this.inputLang = inputLang;
    this.page = page; 

    return new Promise((resolve, reject) => {
    this.http.get(environment.movies.API_BASE_URL + 
      'api_key=' + environment.movies.API_KEY + 
      '&query=' + inputKeyWord + '&language=' + 
      inputLang + '&region=' + inputLang + '&page=' + page)
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

  getSearchParameter() {
    return {
      movie: this.inputKeyWord,
      lang: this.inputLang,
      page: this.page
    }
  }
}
