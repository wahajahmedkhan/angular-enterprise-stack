import { Route } from '@angular/router';
import { ShellSmartComponent } from './smart-components/shell/shell.smart-component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FORECAST_STATE_KEY, forecastStateReducer } from '@angular-enterprise-stack/forecast-fusion/data-access';

export const ffFeatShellRoutes: Route[] = [
  {
    path: '',
    component: ShellSmartComponent,
    providers: [importProvidersFrom(StoreModule.forFeature(FORECAST_STATE_KEY, forecastStateReducer))]
  },
];
