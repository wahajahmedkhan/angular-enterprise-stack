import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FORECAST_STATE_KEY, ForecastStateModel } from './forecast.reducer';

export const selectFeature =
  createFeatureSelector<ForecastStateModel>(FORECAST_STATE_KEY);

export const selectForecastStatus = createSelector(
  selectFeature,
  s => s.status,
);
export const selectForecastData = createSelector(
  selectFeature,
  s => s.data.data,
);
export const selectForecastCurrentCity = createSelector(
  selectFeature,
  s => s.data.city_name,
);

export const selectAllCities = createSelector(selectFeature, s => s.countries);
