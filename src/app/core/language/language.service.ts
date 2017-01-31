import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { environment } from '../../../environments/environment';
import 'rxjs/Rx';


@Injectable()

export class LanguageService {
  
  public language: any;

  constructor(private http: Http) {}
  
  getLanguages()  {
    console.log('language');
    return this.language  =  environment.languages.list;
  }
}
