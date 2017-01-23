import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wikicini-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.type = "text";
  }

}
