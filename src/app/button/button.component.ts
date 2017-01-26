import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wikicini-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type;
  @Input() value;
  @Input() buttonClass;	

  constructor() { }

  ngOnInit() {
  }

  getClassName() {
    return this.buttonClass;
  }

}
