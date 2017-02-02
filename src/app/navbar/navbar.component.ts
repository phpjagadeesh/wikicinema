import { Component, OnInit } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { SearchService } from '../core/search/search.service';
import { LanguageService } from '../core/language/language.service';
import { NavbarService } from './navbar.service';
import { Router } from "@angular/router";


@Component({
  selector: 'wikicini-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private inputValue: string;
  public showLangunage: boolean;
  public langDetail: any;
  public langName: any;
  public generatedTemplate: any;

  constructor(private searchService: SearchService, 
    private router:Router,
    private languageService: LanguageService,
    private navbarService: NavbarService) { }

  ngOnInit() {
    this.showLangunage = false;
    this.getRegionalLanguages();
  }

  submitSearch(event) {
    this.searchService.getMovieDetais(this.inputValue).then(
      response => this.router.navigate(['/search', this.inputValue]))
  }

  ShowLanguageWindow() {
    this.showLangunage = !this.showLangunage;
  }

  getRegionalLanguages() {
    this.langDetail = this.languageService.getLanguages();
  }

  getLanguageName(langCode) {
    this.langName = this.languageService.getLanguageName();
    return this.langName[langCode];
  }
}
