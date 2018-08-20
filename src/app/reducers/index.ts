import { AppActions } from './../app.actions';
import { storeFreeze } from 'ngrx-store-freeze';

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppActionTypes } from '../app.actions';

export interface State {
  app: any;
}
export const reducers: ActionReducerMap<State> = {
  app: reducer
};
export const initialState: any = {
  camps: null
};
export function reducer(state = initialState, action: AppActions): State {
  switch (action.type) {
    case AppActionTypes.LoadCampSuccess:
      return {
        ...state,
        camps: action.payload,
        error: ''
      };

    // case AppActionTypes.LoadCampFail:
    //   return {
    //     ...state,
    //     camps: [],
    //     error: action.payload
    //   };

    default: {
      return state;
    }
  }
}
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];
