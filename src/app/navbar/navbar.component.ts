import { Component, OnInit } from '@angular/core';
import { SearchService } from '../core/search/search.service';
import { LanguageService } from '../core/language/language.service';
import { Router } from "@angular/router";


@Component({
  selector: 'wikicini-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private inputValue: string;
  public showLangunage: boolean;

  constructor(private searchService: SearchService, 
    private router:Router,
    private languageService: LanguageService) { }

  ngOnInit() {
    this.showLangunage = false;
  }

  submitSearch(event) {
    this.searchService.getMovieDetais(this.inputValue).then(
      response => this.router.navigate(['/search', this.inputValue]))
  }

  ShowLanguageWindow() {
    this.showLangunage = !this.showLangunage;
  }

  getRegionalLanguages() {
    this.languageService.getLanguages();
  }
}
