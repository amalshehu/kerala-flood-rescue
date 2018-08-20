import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCampComponent } from 'src/app/update-camp/update-camp.component';

const updateCamp: Routes = [
  { path: 'update-camp', component: UpdateCampComponent }
];
@NgModule({
  imports: [RouterModule.forChild(updateCamp)],
  exports: [RouterModule]
})
export class UpdateCampRouteRoutingModule {}
