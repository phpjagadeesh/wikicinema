import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './sections/search/search.component';

const APP_ROUTES: Routes = [
  { path: 'search/:id', component: SearchComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);