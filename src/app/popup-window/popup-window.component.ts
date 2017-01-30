import { Component, OnInit, Input, ElementRef, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'wikicini-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.scss']
})

export class PopupWindowComponent implements OnInit {

  @ViewChild('popupOpen') popupOpen:ElementRef;
  
  @Input() title;
  @Input()
  set popupShow(popupShow: any) {
    if(popupShow) {
      setTimeout(() => 
        this.render.invokeElementMethod(this.popupOpen.nativeElement,'click')
      ); 
    }
  }
 
  constructor(private render: Renderer) { }

  ngOnInit() {
  }

}
