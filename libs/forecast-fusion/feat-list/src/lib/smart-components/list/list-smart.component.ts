import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ff-feat-list',
  standalone: true,
  imports: [],
  templateUrl: './list-smart.component.html',
  styleUrls: ['./list-smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSmartComponent {}
