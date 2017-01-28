import { Component, OnInit } from '@angular/core';
import { SearchService } from '../core/search/search.service';
import { Router } from "@angular/router";


@Component({
  selector: 'wikicini-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private inputValue: string;

  constructor(private searchService: SearchService, private router:Router) { }

  ngOnInit() {
  }

  submitSearch(event) {
    this.searchService.getMovieDetais(this.inputValue);
    this.router.navigate(['/search', this.inputValue]);
  }
}
