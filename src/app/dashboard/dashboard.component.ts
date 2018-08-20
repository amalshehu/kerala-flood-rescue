import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as appActions from '../app.actions';
import * as fromApp from '../reducers/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  campsCount$: any;
  constructor(private store: Store<fromApp.State>) {}

  ngOnInit() {
    this.campsCount$ = this.store.pipe(select(fromApp.getCampOverallCount));
  }
}
