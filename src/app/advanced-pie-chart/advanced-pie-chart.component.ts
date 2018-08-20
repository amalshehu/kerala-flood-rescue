import { piechartData } from './../data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced-pie-chart',
  templateUrl: './advanced-pie-chart.component.html',
  styleUrls: ['./advanced-pie-chart.component.scss']
})
export class AdvancedPieChartComponent {
  piechartData: any[];
  view: any[] = [500, 200];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { piechartData });
  }

  onSelect(event) {
    console.log(event);
  }
}
