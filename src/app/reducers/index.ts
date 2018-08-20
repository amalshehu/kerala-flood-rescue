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
  camp: any;
}
export const reducers: ActionReducerMap<State> = {
  camp: reducer
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

// Selector functions
const getCampFeatureState = createFeatureSelector<any>('camp');

export const getCampOverallCount = createSelector(
  getCampFeatureState,
  state => {
    const camps = state.camps;
    if (!camps) {
      return [];
    }
    return camps.reduce((acc, val) => {
      acc.push({
        name: val[0].District.substring(0, 4).toUpperCase(),
        value: val.length
      });
      return acc;
    }, []);
  }
);
