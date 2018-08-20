import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCampRouteRoutingModule } from 'src/app/update-camp/update-camp-route-routing.module';
import { UpdateCampComponent } from 'src/app/update-camp/update-camp.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UpdateCampRouteRoutingModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [UpdateCampComponent]
})
export class UpdateCampModule {}
