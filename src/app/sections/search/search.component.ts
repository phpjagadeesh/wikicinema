import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/search/search.service';
import * as R from 'ramda';

@Component({
  selector: 'wikicini-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  ciniData: any;	
  finalData: any;

  constructor( private searchService: SearchService ) { 
  }

  ngOnInit() {
  	this.displayData();
  }

  displayData() {
    this.ciniData = this.searchService.getRecievedData();
    if(this.ciniData[0]) {
      console.log(this.ciniData[0].results);
      this.finalData = this.ciniData[0].results;
      return this.ciniData[0].results;
    }
  }
}