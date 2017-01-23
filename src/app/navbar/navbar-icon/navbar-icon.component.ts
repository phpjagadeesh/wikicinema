import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wikicini-navbar-icon',
  templateUrl: './navbar-icon.component.html',
  styleUrls: ['./navbar-icon.component.scss']
})
export class NavbarIconComponent implements OnInit {

  @Input() iconClass;

  constructor() {
  }

  ngOnInit() {
  }

  setClasses() {
      return this.iconClass;
  }
}
