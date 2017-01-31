import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import 'rxjs/Rx';


@Injectable()

export class NavbarService {
  
  public myHtml: any;

  constructor() {}
  
  getLanguageHtml(listParams)  {
      console.log(listParams);
    return  `<ul class="list-group"> 
       <li class="list-group-item" *ngFor="let item of listParams">
       <span>
       <wikicini-input type="checkbox"
       buttonClass="wikicini-navbar-input__text">
       </wikicini-input>
       </span>
       <span>Language name ({{ item }})</span>
       </li>
       </ul>`;
  }
}
 