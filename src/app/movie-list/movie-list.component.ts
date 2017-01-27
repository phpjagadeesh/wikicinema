import { Component, OnInit } from '@angular/core';
import { SearchService } from '../core/search/search.service';

@Component({
  selector: 'wikicini-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private searchService: SearchService) { }
  
  ngOnInit() {
      console.log('ddd',this.searchService.getRecievedData());
  }
}
