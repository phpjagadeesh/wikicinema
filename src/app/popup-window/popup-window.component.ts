import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wikicini-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.scss']
})
export class PopupWindowComponent implements OnInit {

  @Input() popupShow; 
 
  constructor() { }

  ngOnInit() {
  }

}
