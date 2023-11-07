import { createReducer, on } from '@ngrx/store';
import { europeanCities, usCities } from './constant';
import { forecastActions } from './forecast.actions';
import { ForecastApiResult, ForecastData, SortType } from './forecast.types';

export const FORECAST_STATE_KEY = 'forecastState';

export interface ForecastStateModel {
  status: 'idle' | 'pending' | 'success' | 'error';
  data: ForecastApiResult;
  error: string;
  countries: Array<string>;
}

export const initialForecastState: ForecastStateModel = {
  status: 'idle',
  data: {
    city_name: '',
    country_code: '',
    data: [],
  },
  error: '',
  countries: [...usCities, ...europeanCities].sort(),
};

export const forecastStateReducer = createReducer<ForecastStateModel>(
  initialForecastState,
  on(forecastActions.fetchForecast, state => ({
    ...state,
    status: 'pending',
  })),
  on(forecastActions.fetchForecastSuccess, (state, data) => ({
    ...state,
    status: 'success',
    data,
  })),
  on(forecastActions.fetchForecastError, (state, { error }) => ({
    ...state,
    status: 'error',
    error,
  })),
  on(forecastActions.sortForecastData, (state, { sortType }) => ({
    ...state,
    data: {
      ...state.data,
      data: dateSorter([...state.data.data], sortType),
    },
  })),
);

function dateSorter(arr: Array<ForecastData>, sortType: SortType) {
  return arr.sort((a, b) => {
    if (sortType === 'asc') {
      return new Date(a.valid_date) > new Date(b.valid_date) ? 0 : -1;
    } else {
      return new Date(a.valid_date) < new Date(b.valid_date) ? 0 : -1;
    }
  });
}
