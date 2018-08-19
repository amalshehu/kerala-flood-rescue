import { Component } from '@angular/core';
import { multi } from '../data';

@Component({
  selector: 'app-group-bar-chart',
  templateUrl: './group-bar-chart.component.html',
  styleUrls: ['./group-bar-chart.component.scss']
})
export class GroupBarChartComponent {
  single: any[];
  multi: any[];
  view: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'District';
  showYAxisLabel = true;
  yAxisLabel = 'Number of people';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(event) {
    console.log(event);
  }
}
