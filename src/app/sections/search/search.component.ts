import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'wikicini-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  private finalData = [];
  private ciniData: any;
  private params: any;
  private totalPage:number;
  private showMoreButtonFlag: boolean;

  constructor( private searchService: SearchService ) {
  	this.displayData();
  }

  ngOnInit() {
  	this.displayData();
  }

  displayData() {
    this.ciniData = this.searchService.getRecievedData();
    for(let i = 0; i < this.ciniData.length; i++){
    if(this.ciniData[i]) {
      for(let j = 0; j < this.ciniData[i].results.length; j++){
        this.finalData.push(this.ciniData[i].results[j]);
      }
      this.totalPage = this.ciniData[i].total_pages;
    }
  }
  }

  loadMoveMore() {
    this.params = this.searchService.getSearchParameter();
    console.log('this.params.page',this.params.page);
    if(this.totalPage > this.params.page) {
      this.params.page = this.params.page + 1;
      this.showMoreButtonFlag = false;
    }
    this.searchService.getMovieDetais(this.params.movie, this.params.lang, this.params.page).then(result => {
      this.displayData();
    });;
  }
}
