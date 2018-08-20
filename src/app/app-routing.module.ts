import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: '../app/update-camp/update-camp.module#UpdateCampModule'
  // }
  // {
  //   path: '',
  //   loadChildren: '../app/dashboard/dashboard.module.ts#DashboardModule'
  // },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteRoutingModule {}
