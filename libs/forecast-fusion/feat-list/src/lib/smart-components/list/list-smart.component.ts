import { selectForecastData } from '@angular-enterprise-stack/forecast-fusion/data-access';
import { DatePipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ff-feat-list',
  standalone: true,
  imports: [DatePipe, NgForOf],
  templateUrl: './list-smart.component.html',
  styleUrls: ['./list-smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSmartComponent {
  private readonly store = inject(Store);
  public readonly forecastData = toSignal(
    this.store.select(selectForecastData),
    { initialValue: [] },
  );
}
