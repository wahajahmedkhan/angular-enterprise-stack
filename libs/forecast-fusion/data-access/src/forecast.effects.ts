import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { forecastActions } from './forecast.actions';
import { ForecastService } from './forecast.service';

@Injectable()
export class ForecastEffects {
  private readonly actions$ = inject(Actions);
  private readonly forecastService = inject(ForecastService);

  fetchForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(forecastActions.fetchForecast),
      mergeMap(({ city }) =>
        this.forecastService.fetchForecast(city).pipe(
          map(res => forecastActions.fetchForecastSuccess(res)),
          catchError(err => of(forecastActions.fetchForecastError(err.error))),
        ),
      ),
    ),
  );
}
