import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/search/search.service';


@Component({
  selector: 'wikicini-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  constructor( private searchService: SearchService ) { }

  ngOnInit() {
   console.log('GOT IT',this.searchService.getMovieDetais());
  }

}
