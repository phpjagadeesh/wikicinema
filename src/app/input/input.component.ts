import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() myName;

  @Input() myId : string;
  @Input() bindModelData: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  handleClick(event: any) {
    this.onClick.emit(event.target);
  }

  
  constructor() { 
  }

  ngOnInit() {
  }

  getClassName() {
    return this.buttonClass;
  }
}
