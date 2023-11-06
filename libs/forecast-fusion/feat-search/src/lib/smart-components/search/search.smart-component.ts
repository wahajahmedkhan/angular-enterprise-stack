import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ff-feat-search',
  standalone: true,
  templateUrl: './search.smart-component.html',
  styleUrls: ['./search.smart-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchSmartComponent {}
