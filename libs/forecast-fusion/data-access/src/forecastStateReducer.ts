import { createReducer, on } from '@ngrx/store';
import { forecastActions } from './forecast.actions';

export const FORECAST_STATE_KEY = 'forecastState';

export interface ForecastStateModel {
  status: 'idle' | 'pending' | 'success' | 'error';
  data: {
    city_name: string;
    country_code: string;
    data: Array<ForecastData>;
  }
  error: string
}

export interface ForecastData {
  app_max_temp: number;
  app_min_temp: number;
  clouds: number;
  clouds_hi: number;
  clouds_low: number;
  clouds_mid: number;
  datetime: string;
  dewpt: number;
  high_temp: number;
  low_temp: number;
  max_dhi: null;
  max_temp: number;
  min_temp: number;
  moon_phase: number;
  moon_phase_lunation: number;
  moonrise_ts: number;
  moonset_ts: number;
  ozone: number;
  pop: number;
  precip: number;
  pres: number;
  rh: number;
  slp: number;
  snow: number;
  snow_depth: number;
  sunrise_ts: number;
  sunset_ts: number;
  temp: number;
  ts: number;
  uv: number;
  valid_date: string;
  vis: number;
  weather: {
    description: string;
    icon: string;
    code: number;
  };
  wind_cdir: string;
  wind_cdir_full: string;
  wind_dir: number;
  wind_gust_spd: number;
  wind_spd: number;
}

export const initialForecastState: ForecastStateModel = {
  status: 'idle',
  data: {
    city_name: '',
    country_code: '',
    data: [],
  },
  error: ''
};


export const forecastStateReducer = createReducer<ForecastStateModel>(
  initialForecastState,
  on(forecastActions.fetchForecast, (state) => ({
    ...state,
    status: 'pending'
  })),
  on(forecastActions.fetchForecastSuccess, (state, { data }) => ({
    ...state,
    status: 'success',
    data
  })),
  on(forecastActions.fetchForecastError, (state, { error }) => ({
    ...state,
    status: 'error',
    error
  }))

)