import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wikicini-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  inputType: string;
  
  @Input() type;
  @Input() value;
  @Input() buttonClass;
  @Input() sizeNumber;
  @Input() placeHolder;
  
  constructor() { }

  ngOnInit() {
  }

  getClassName() {
      return this.buttonClass;
  }

}
