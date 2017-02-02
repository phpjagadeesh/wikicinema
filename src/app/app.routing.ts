import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './sections/search/search.component';
import { InputModule } from './input/input.module';


const APP_ROUTES: Routes = [
  { path: 'search/:id/:id2', component: SearchComponent},
  { path: 'a', component: InputModule}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);