import { AppService } from './app.service';
import {
  AppActionTypes,
  AppActions,
  LoadCampSuccess,
  LoadCampFail
} from './app.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()
export class AppEffects {
  @Effect()
  loadCamps$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.LoadCamp),
    mergeMap(action => {
      return this.appService.getCamps().pipe(
        map(camps => new LoadCampSuccess(camps)),
        catchError(err => of(new LoadCampFail(err)))
      );
    })
  );
  constructor(private actions$: Actions, private appService: AppService) {}
}
