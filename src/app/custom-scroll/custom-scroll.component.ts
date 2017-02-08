import { Component} from '@angular/core';

@Component({
  selector: 'wikicini-custom-scroll',
  templateUrl: './custom-scroll.component.html',
  styleUrls: ['./custom-scroll.component.scss'],
  host: {'(window:scroll)': 'track($event)'}
})
export class CustomScrollComponent {

  public showIcon: boolean;

  constructor() { }

  track($event) {
    this.showIcon = $event.path[1].pageYOffset > 0 ? true : false;
  }
  
  scrollToTop() {
  	window.scrollTo(0,0);
  }
}
