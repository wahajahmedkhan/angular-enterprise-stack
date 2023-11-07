import { createReducer, on } from '@ngrx/store';
import { forecastActions } from './forecast.actions';
import { ForecastApiResult } from './forecast.types';

export const FORECAST_STATE_KEY = 'forecastState';

export interface ForecastStateModel {
  status: 'idle' | 'pending' | 'success' | 'error';
  data: ForecastApiResult;
  error: string;
}

export const initialForecastState: ForecastStateModel = {
  status: 'idle',
  data: {
    city_name: '',
    country_code: '',
    data: [],
  },
  error: '',
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
);
