import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { WindowRefService } from './window-ref.service';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AdvancedPieChartComponent } from './advanced-pie-chart/advanced-pie-chart.component';
import { DistrictOverviewComponent } from './district-overview/district-overview.component';
import { DataTableComponent } from './data-table/data-table.component';
import { GroupBarChartComponent } from './group-bar-chart/group-bar-chart.component';

import { AppRouteRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { UpdateCampModule } from 'src/app/update-camp/update-camp.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MapComponent,
    DashboardComponent,
    AdvancedPieChartComponent,
    DistrictOverviewComponent,
    DataTableComponent,
    GroupBarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxChartsModule,
    FormsModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig,
      'kerala-flood-rescue'
    ),
    MatIconModule,
    AngularFireDatabaseModule,
    MatSnackBarModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapApiKey
    }),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRouteRoutingModule,
    RouterModule,
    UpdateCampModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule {}
