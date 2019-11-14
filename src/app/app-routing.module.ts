import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchListComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: ':id',
    component: LaunchDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
