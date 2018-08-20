import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouteRoutingModule } from 'src/app/dashboard/dashboard-routing.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

import { AdvancedPieChartComponent } from '../advanced-pie-chart/advanced-pie-chart.component';
import { DistrictOverviewComponent } from '../district-overview/district-overview.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { GroupBarChartComponent } from '../group-bar-chart/group-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
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

@NgModule({
  imports: [
    CommonModule,
    DashboardRouteRoutingModule,
    MatCardModule,
    NgxChartsModule,
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
  ],
  declarations: [
    DashboardComponent,
    AdvancedPieChartComponent,
    DistrictOverviewComponent,
    DataTableComponent,
    GroupBarChartComponent
  ]
})
export class DashboardModule {}
