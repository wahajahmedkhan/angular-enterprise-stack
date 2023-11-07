import { createActionGroup, props } from '@ngrx/store';
import { ForecastApiResult, SortType } from './forecast.types';

export const forecastActions = createActionGroup({
  source: 'Forecast',
  events: {
    'fetch forecast': props<{ city: string }>(),
    'fetch forecast success': props<ForecastApiResult>(),
    'fetch forecast error': props<{ error: string }>(),
    'sort forecast data': props<{ sortType: SortType }>(),
  },
});
