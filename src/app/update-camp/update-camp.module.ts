import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCampRouteRoutingModule } from 'src/app/update-camp/update-camp-route-routing.module';
import { UpdateCampComponent } from 'src/app/update-camp/update-camp.component';

@NgModule({
  imports: [CommonModule, UpdateCampRouteRoutingModule],
  declarations: [UpdateCampComponent]
})
export class UpdateCampModule {}
