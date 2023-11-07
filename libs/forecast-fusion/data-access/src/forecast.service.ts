import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastWeatherBitService } from './forecast-weather-bit.service';
import { ForecastApiResult } from './forecast.types';

@Injectable()
export class ForecastService {
  private readonly forecastWeatherBitService = inject(
    ForecastWeatherBitService,
  );
  public fetchForecast(city: string): Observable<ForecastApiResult> {
    return this.forecastWeatherBitService.fetchForecast(city);
  }
}
