import {Routes} from '@angular/router';
import {ColorComponent} from './color/color.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';

export const appRoutes: Routes =  [

  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'coloring/:id', component: ColorComponent},
  {path: 'details/:id', component: DetailComponent}


];
