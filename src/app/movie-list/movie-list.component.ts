import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../core/image/image.service';
import * as R from 'ramda';

@Component({
  selector: 'wikicini-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() data;

  constructor(private imageService: ImageService) { 
    
  }
  
  ngOnInit() {}

  imageSrc() {
  	return this.imageService.getImageUrl(this.data.poster_path)
  }

  isAdult(adultFinder) {
    return adultFinder ? 'Adults Only' : 'No Adult Only'; 
  }
}
