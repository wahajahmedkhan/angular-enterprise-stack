import { createActionGroup, props } from '@ngrx/store';
import { ForecastApiResult } from './forecast.types';

export const forecastActions = createActionGroup({
  source: 'Forecast',
  events: {
    fetchForecast: props<{ city: string }>(),
    fetchForecastSuccess: props<ForecastApiResult>(),
    fetchForecastError: props<{ error: string }>(),
  },
});
