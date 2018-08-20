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
import { LayoutModule } from '@angular/cdk/layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DistrictOverviewComponent } from './district-overview/district-overview.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { WindowRefService } from './window-ref.service';
import { GroupBarChartComponent } from './group-bar-chart/group-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataTableComponent } from './data-table/data-table.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdvancedPieChartComponent } from './advanced-pie-chart/advanced-pie-chart.component';
import { AppRouteRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MapComponent,
    GroupBarChartComponent,
    DataTableComponent,
    DistrictOverviewComponent,
    AdvancedPieChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxChartsModule,
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
    LayoutModule,
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
    RouterModule
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule {}
