import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

const dashboardRoute: Routes = [
  { path: 'home', component: DashboardComponent }
];
@NgModule({
  imports: [RouterModule.forChild(dashboardRoute)],
  exports: [RouterModule]
})
export class DashboardRouteRoutingModule {}
