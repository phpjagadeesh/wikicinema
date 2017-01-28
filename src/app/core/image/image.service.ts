import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable()

export class ImageService {
  
  constructor() {}
  
  getImageUrl(imagePath)  {
   return environment.movies.IMAGE_URL + imagePath
  }

}
