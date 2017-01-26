import { Component, OnInit } from '@angular/core';
import { SearchService } from '../core/search/search.service';


@Component({
  selector: 'wikicini-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 private inputValue: string;
 serviceGetResponse: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  submitSearch(event) {
    console.log(this.inputValue);
    console.log(this.searchService.getMovieDetais());
  }
}
