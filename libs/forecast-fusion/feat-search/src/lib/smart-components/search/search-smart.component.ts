import {
  forecastActions,
  selectAllCities,
} from '@angular-enterprise-stack/forecast-fusion/data-access';
import { NgForOf, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ff-feat-search',
  standalone: true,
  templateUrl: './search-smart.component.html',
  styleUrls: ['./search-smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgForOf],
})
export class SearchSmartComponent {
  private readonly store = inject(Store);

  public readonly allCities = toSignal(this.store.select(selectAllCities), {
    initialValue: [],
  });

  private search = signal('');
  public searchReadOnly = this.search.asReadonly();

  public readonly filterCities = computed(
    () =>
      this.allCities().filter(city =>
        city.toLowerCase().includes(this.search().toLowerCase()),
      ) ?? [],
  );

  public readonly ifCityExactMatch = computed(
    () =>
      this.filterCities().length === 1 &&
      this.search() === this.filterCities()[0],
  );

  public fetchForecast(): void {
    if (this.ifCityExactMatch()) {
      this.store.dispatch(
        forecastActions.fetchForecast({ city: this.search() }),
      );
    } else {
      this.store.dispatch(
        forecastActions.fetchForecastError({
          error: 'Invalid Parameters supplied.',
        }),
      );
    }
  }

  changeSearch(value: string) {
    this.search.set(value);
  }
}
