import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wikicini-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchInput: string;

  constructor() { }

  ngOnInit() {
  }

  submitSearch(event) {
   console.log('searchInput', event);
  }
}
