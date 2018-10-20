import {Routes} from '@angular/router';
import {ColorComponent} from './color/color.component';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes =  [

  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'coloring', component: ColorComponent},

];

