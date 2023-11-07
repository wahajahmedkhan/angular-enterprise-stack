import {
  FORECAST_STATE_KEY,
  ForecastEffects,
  ForecastService,
  forecastStateReducer,
  ForecastWeatherBitService,
} from '@angular-enterprise-stack/forecast-fusion/data-access';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ShellSmartComponent } from './smart-components/shell/shell.smart-component';

export const ffFeatShellRoutes: Route[] = [
  {
    path: '',
    component: ShellSmartComponent,
    providers: [
      ForecastService,
      ForecastWeatherBitService,
      importProvidersFrom(
        HttpClientModule,
        StoreModule.forFeature(FORECAST_STATE_KEY, forecastStateReducer),
        EffectsModule.forFeature([ForecastEffects]),
      ),
    ],
  },
];
