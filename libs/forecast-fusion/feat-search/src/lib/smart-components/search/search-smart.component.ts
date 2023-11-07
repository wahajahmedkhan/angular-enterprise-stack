import { forecastActions } from '@angular-enterprise-stack/forecast-fusion/data-access';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ff-feat-search',
  standalone: true,
  templateUrl: './search-smart.component.html',
  styleUrls: ['./search-smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchSmartComponent {
  private readonly store = inject(Store);

  public testfn(): void {
    this.store.dispatch(forecastActions.fetchForecast({ city: 'Amsterdam' }));
  }
}
