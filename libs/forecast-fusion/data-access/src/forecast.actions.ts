import { createActionGroup, props } from '@ngrx/store';
import { ForecastStateModel } from './forecastStateReducer';

export const forecastActions = createActionGroup({
  source: 'Forecast',
  events: {
    fetchForecast: props<{city_name: string, country_code: string}>(),
    fetchForecastSuccess: props<ForecastStateModel>(),
    fetchForecastError: props<{ error: string }>(),
  }
});