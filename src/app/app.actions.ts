import { Action } from '@ngrx/store';

export enum AppActionTypes {
  LoadCamp = '[App] Load Camps',
  LoadCampFail = '[App] Load Apps Fail',
  LoadCampSuccess = '[App] Load Apps Success'
}

export class LoadCamp implements Action {
  readonly type = AppActionTypes.LoadCamp;
}

export class LoadCampSuccess implements Action {
  readonly type = AppActionTypes.LoadCampSuccess;
  constructor(public payload: any) {}
}
export class LoadCampFail implements Action {
  readonly type = AppActionTypes.LoadCamp;
  constructor(public payload: any) {}
}
export type AppActions = LoadCamp | LoadCampFail | LoadCampSuccess;
