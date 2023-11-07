import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastApiResult } from './forecast.types';

@Injectable()
export class ForecastWeatherBitService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = 'https://api.weatherbit.io/v2.0';

  public fetchForecast(city: string): Observable<ForecastApiResult> {
    return this.httpClient.get<ForecastApiResult>(
      `${this.apiUrl}/forecast/daily?city=${city}&key=894684745455475d9da86cfb486a24f9`,
    );
  }
}
