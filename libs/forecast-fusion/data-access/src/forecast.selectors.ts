import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FORECAST_STATE_KEY, ForecastStateModel } from './forecast.reducer';

const selectFeature =
  createFeatureSelector<ForecastStateModel>(FORECAST_STATE_KEY);

const selectForecastStatus = createSelector(selectFeature, s => s.status);
const selectForecastData = createSelector(selectFeature, s => s.data.data);
const selectForecastCurrentCity = createSelector(
  selectFeature,
  s => s.data.city_name,
);
