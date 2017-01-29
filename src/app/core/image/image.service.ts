import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable()

export class ImageService {
  
  constructor() {}
  
  getImageUrl(imagePath)  {
   if(imagePath) {
     return environment.movies.IMAGE_URL + imagePath
   }
   else{
   	return environment.movies.NO_IMAGE;
   }	
  }

}
