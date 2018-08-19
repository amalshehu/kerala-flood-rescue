import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { WindowRefService } from './window-ref.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapApiKey
    }),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule {}
