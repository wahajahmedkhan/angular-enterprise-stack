import {
  selectForecastData,
  selectForecastStatus,
} from '@angular-enterprise-stack/forecast-fusion/data-access';
import { DatePipe, NgForOf, NgIf, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ff-feat-list',
  standalone: true,
  imports: [DatePipe, NgForOf, NgStyle, NgIf],
  templateUrl: './list-smart.component.html',
  styleUrls: ['./list-smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSmartComponent {
  private readonly store = inject(Store);

  public readonly forecastStatus = toSignal(
    this.store.select(selectForecastStatus),
  );
  public readonly forecastData = toSignal(
    this.store.select(selectForecastData),
    { initialValue: [] },
  );
}
