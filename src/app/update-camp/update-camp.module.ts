import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCampRouteRoutingModule } from 'src/app/update-camp/update-camp-route-routing.module';
import { UpdateCampComponent } from 'src/app/update-camp/update-camp.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UpdateCampRouteRoutingModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateCampComponent]
})
export class UpdateCampModule {}
