import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'wikicini-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  finalData: any;
  ciniData: any;

  constructor( private searchService: SearchService ) {
  	this.displayData();
  }

  ngOnInit() {
  	this.displayData();
  }

  displayData() {
    this.ciniData = this.searchService.getRecievedData();

    if(this.ciniData[0]) {
      this.finalData = this.ciniData[0].results;
    }
  }
}