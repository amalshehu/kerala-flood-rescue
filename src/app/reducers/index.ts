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
  camps: null,
  districtNames: [],
  selectedDistrictId: 'Idukki - ഇടുക്കി'
};
export function reducer(state = initialState, action: AppActions): State {
  switch (action.type) {
    case AppActionTypes.LoadCampSuccess:
      const data = action.payload;
      const filtered = data.reduce((acc, val) => {
        acc[val[0].District] = val;
        return acc;
      }, {});

      return {
        ...state,
        camps: filtered,
        districtIds: Object.keys(filtered),
        error: ''
      };
    case AppActionTypes.UpdateCampOption:
      return {
        ...state,
        selectedDistrictId: action.payload
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
    if (!state.camps) {
      return [];
    }
    return state.districtIds.reduce((acc, val) => {
      acc.push({
        name: val,
        value: state.camps[val].length
      });
      return acc;
    }, []);
  }
);

export const getSelectedDistrictOption = createSelector(
  getCampFeatureState,
  state => {
    const camps = state.camps;
    if (!camps) {
      return [];
    }
    const currentDistrict = state.camps[state.selectedDistrictId];
    return currentDistrict.reduce((acc, val) => {
      if (val.Center && val.Center.length > 1) {
        acc.push(val.Center);
      }
      return acc;
    }, []);
  }
);
export const getDistrictList = createSelector(getCampFeatureState, state => {
  const camps = state.camps;
  if (!camps) {
    return [];
  }
  return state.districtIds.reduce((acc, val) => {
    acc.push({
      viewValue: val.split(' ')[0],
      value: val
    });
    return acc;
  }, []);
});
