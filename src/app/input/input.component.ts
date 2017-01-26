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
  @Input() placeholder;
    
  @Output() private valueChange = new EventEmitter<String>();
  
  constructor() { 
  }

  ngOnInit() {
  }

  getClassName() {
    return this.buttonClass;
  }

  handleKeyup(fieldValue: string): void {
    this.valueChange.emit(fieldValue);
  }
}
