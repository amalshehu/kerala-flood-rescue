import { Action } from '@ngrx/store';

export enum AppActionTypes {
  LoadCamp = '[App] Load Camps',
  LoadCampFail = '[App] Load Apps Fail',
  LoadCampSuccess = '[App] Load Apps Success',
  UpdateCampOption = '[App] Update CampOption',
  UpdateCampOptionFail = '[App] Update CampOptionFail',
  UpdateCampOptionSuccess = '[App] Update CampOptionSuccess'
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
export class UpdateCampOption implements Action {
  readonly type = AppActionTypes.UpdateCampOption;
  constructor(public payload: any) {}
}

export class UpdateCampOptionSuccess implements Action {
  readonly type = AppActionTypes.UpdateCampOptionSuccess;
  constructor(public payload: any) {}
}
export class UpdateCampOptionFail implements Action {
  readonly type = AppActionTypes.UpdateCampOptionFail;
  constructor(public payload: any) {}
}

export type AppActions =
  | LoadCamp
  | LoadCampFail
  | LoadCampSuccess
  | UpdateCampOption
  | UpdateCampOptionSuccess
  | UpdateCampOptionFail;
