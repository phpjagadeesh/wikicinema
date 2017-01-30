import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../core/image/image.service';

import { environment } from '../../environments/environment';

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
    return adultFinder ? environment.movies.CATEGORY_STRING.ADULT : environment.movies.CATEGORY_STRING.ADULT_ONLY; 
  }
}
