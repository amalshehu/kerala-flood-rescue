import { Component, Input } from '@angular/core';
import { multi, single } from '../data';

@Component({
  selector: 'app-group-bar-chart',
  templateUrl: './group-bar-chart.component.html',
  styleUrls: ['./group-bar-chart.component.scss']
})
export class GroupBarChartComponent {
  @Input()
  data;
  single: any[];
  multi: any[];
  view: any[] = [1300, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'District';
  showYAxisLabel = true;
  yAxisLabel = 'Camps';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }
}
